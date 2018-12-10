#!/usr/bin/env bash

set -e

STARTUP_SCRIPT=server/startup.sh

# Required config variables in config.sh:
#
# PROJECT=
# ZONE=
# NETWORK=
# BUCKET=
# MACHINE_TYPE=
# IMAGE_FAMILY=
# IMAGE_PROJECT=
# SCOPES=
# TAGS=
# SERVER_PREFIX=
# GITHUB_TOKEN=
# CLIENT_DOCKER_IMAGE=
# SLACK_WEBHOOK_URL=


CONFIG_FILE=./config.sh
if [ -e "${CONFIG_FILE}" ]; then
    source ${CONFIG_FILE}
else
    echo "missing ${CONFIG_FILE} with required variables"
    exit
fi

function print_usage() {
  echo "Manage Applications: ${0} upload [application.jar] | ls"
  echo ""
  echo "upload   - upload given jar file to the gcloud storage bucket"
  echo "ls       - list application files in the gcloud storage bucket"
  echo ""
  echo "Benchmark: ${0} start [application] | status | stop [application]"
  echo "start    - run the benchmark for the given app"
  echo "status   - print status information about running instances"
  echo "stop     - stop and delete server instances for the given app"
}

if [ $# = 0 ]; then
  print_usage
  exit
fi

gcloud config set project ${PROJECT} > /dev/null 2>&1

COMMAND=$1

case $COMMAND in

upload)
  gsutil cp $2 gs://${BUCKET}/apps/
  ;;

ls)
  gsutil ls gs://${BUCKET}/apps/
  ;;

status)
  gcloud compute instances list --filter="zone:(${ZONE})"
  ;;
  
start)
  APP_NAME=${2//\.jar/}
  SERVER_NAME=`echo "$SERVER_PREFIX-${APP_NAME//./-}-server" | tr '[:upper:]' '[:lower:]'`
  CLIENT_NAME=`echo "$SERVER_PREFIX-${APP_NAME//./-}-client" | tr '[:upper:]' '[:lower:]'`
  echo "Creating server instance $SERVER_NAME"

  gcloud compute instances create ${SERVER_NAME} \
    --machine-type=${MACHINE_TYPE} \
    --scopes=${SCOPES} \
    --zone=${ZONE} \
    --tags=${TAGS} \
    --image-family=${IMAGE_FAMILY} \
    --image-project=${IMAGE_PROJECT} \
    --create-disk auto-delete=yes \
    --network=${NETWORK} \
    --metadata-from-file startup-script=${STARTUP_SCRIPT} \
    --metadata BUCKET=${BUCKET},APP_NAME=${APP_NAME}.jar

  EXTERNAL_IP=`gcloud compute instances list --filter="name='$SERVER_NAME'" --format="value(networkInterfaces[0].accessConfigs[0].natIP)"`
  echo "Waiting for server to be available on $EXTERNAL_IP:8080"
  while ! nc -z $EXTERNAL_IP 8080 ; do sleep 1 ; done

  echo "Starting client instance $CLIENT_NAME"
  SERVER_HOST=`gcloud compute instances list --filter="name='$SERVER_NAME'" --format="value(networkInterfaces[0].networkIP)"`
  gcloud compute instances create-with-container ${CLIENT_NAME} \
    --machine-type=${MACHINE_TYPE} \
    --zone=${ZONE} \
    --tags=${TAGS} \
    --create-disk auto-delete=yes \
    --network=${NETWORK} \
    --container-image=${CLIENT_DOCKER_IMAGE} \
    --container-env=GITHUB_TOKEN=${GITHUB_TOKEN},APP_NAME=${APP_NAME},SERVER_HOST=${SERVER_HOST}:8080,SLACK_WEBHOOK_URL=${SLACK_WEBHOOK_URL}
  ;;

stop)
  APP_NAME=${2//\.jar/}
  SERVER_NAME=`echo "$SERVER_PREFIX-${APP_NAME//./-}-server" | tr '[:upper:]' '[:lower:]'`
  CLIENT_NAME=`echo "$SERVER_PREFIX-${APP_NAME//./-}-client" | tr '[:upper:]' '[:lower:]'`
  gcloud compute instances delete ${SERVER_NAME} ${CLIENT_NAME} --zone=${ZONE}
  ;;

*)
  print_usage
  exit
  ;;

esac
