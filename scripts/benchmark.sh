#!/usr/bin/env bash

set -e

STARTUP_SCRIPT=../containers/server/startup.sh

# Required config variables in config.sh:
#
# PROJECT=
# ZONE=
# NETWORK=
# BUCKET=
# MACHINE_TYPE=
# IMAGE_FAMILY=
# IMAGE_PROJECT=
# TAGS=
# SERVER_PREFIX=
# GITHUB_TOKEN=
# CLIENT_DOCKER_IMAGE=
# SLACK_WEBHOOK_URL=

SIMULATIONS="TextPlain;Echo;JsonGet;JsonPost;HtmlGet"
INCREMENT=128
STEPS=32

CONFIG_FILE=./config.sh
if [[ -e "${CONFIG_FILE}" ]]; then
    source ${CONFIG_FILE}
else
    echo "missing ${CONFIG_FILE} with required variables"
    exit
fi

function print_usage() {
  echo ""
  echo "Manage Applications: ${0} apps | upload [application.jar]"
  echo "apps     - list application files in the gcloud storage bucket"
  echo "upload   - upload given jar file to the gcloud storage bucket"
  echo ""
  echo "Manage Results: ${0} results | download [application]"
  echo "download - download benchmark results from the gcloud storage bucket"
  echo "results  - list benchmark results in the gcloud storage bucket"
  echo ""
  echo "Benchmark: ${0} start [application] [jdk] | status | stop [application] [jdk]"
  echo "start    - run the benchmark for the given app"
  echo "status   - print status information about running instances"
  echo "stop     - stop and delete server instances for the given app"
}

if [[ $# = 0 ]]; then
  print_usage
  exit
fi

gcloud config set project ${PROJECT} > /dev/null 2>&1

COMMAND=$1

case $COMMAND in

upload)
  gsutil cp $2 gs://${BUCKET}/apps/
  ;;

apps)
  gsutil ls gs://${BUCKET}/apps/
  ;;

results)
  gsutil ls gs://${BUCKET}/results/
  ;;

download)
  gsutil cp gs://${BUCKET}/results/${2}.tar.gz .
  ;;

status)
  gcloud compute instances list --filter="zone:(${ZONE})"
  ;;
  
start)
  APP_NAME=${2//\.jar/}
  JDK=${3}
  SERVER_NAME=`echo "$SERVER_PREFIX-${APP_NAME//./-}-${JDK}-server" | tr '[:upper:]' '[:lower:]'`
  CLIENT_NAME=`echo "$SERVER_PREFIX-${APP_NAME//./-}-${JDK}-client" | tr '[:upper:]' '[:lower:]'`
  echo "Creating server instance $SERVER_NAME with $JDK"

  gcloud compute instances create ${SERVER_NAME} \
    --machine-type=${MACHINE_TYPE} \
    --scopes="userinfo-email,storage-ro" \
    --zone=${ZONE} \
    --tags=${TAGS} \
    --image-family=${IMAGE_FAMILY} \
    --image-project=${IMAGE_PROJECT} \
    --network=${NETWORK} \
    --metadata-from-file startup-script=${STARTUP_SCRIPT} \
    --metadata BUCKET=${BUCKET},JDK=${JDK},APP_NAME=${APP_NAME}.jar

  EXTERNAL_IP=`gcloud compute instances list --filter="name='$SERVER_NAME'" --format="value(networkInterfaces[0].accessConfigs[0].natIP)"`
  echo "Waiting for server to be available on $EXTERNAL_IP:8080"
  while ! nc -z $EXTERNAL_IP 8080 ; do sleep 1 ; done

  echo "Starting client instance $CLIENT_NAME"
  SERVER_HOST=`gcloud compute instances list --filter="name='$SERVER_NAME'" --format="value(networkInterfaces[0].networkIP)"`
  gcloud compute instances create-with-container ${CLIENT_NAME} \
    --machine-type=${MACHINE_TYPE} \
    --scopes="userinfo-email,storage-rw" \
    --zone=${ZONE} \
    --tags=${TAGS} \
    --network=${NETWORK} \
    --container-image=${CLIENT_DOCKER_IMAGE} \
    --container-restart-policy=never \
    --container-env=BUCKET=${BUCKET},APP_NAME="$APP_NAME-$JDK",SERVER_HOST=${SERVER_HOST}:8080,SLACK_WEBHOOK_URL=${SLACK_WEBHOOK_URL},SIMULATIONS=${SIMULATIONS},INCREMENT=${INCREMENT},STEPS=${STEPS}
  ;;

stop)
  APP_NAME=${2//\.jar/}
  JDK=${3}
  SERVER_NAME=`echo "$SERVER_PREFIX-${APP_NAME//./-}-${JDK}-server" | tr '[:upper:]' '[:lower:]'`
  CLIENT_NAME=`echo "$SERVER_PREFIX-${APP_NAME//./-}-${JDK}-client" | tr '[:upper:]' '[:lower:]'`
  gcloud compute instances delete ${SERVER_NAME} ${CLIENT_NAME} --zone=${ZONE}
  ;;

*)
  print_usage
  exit
  ;;

esac
