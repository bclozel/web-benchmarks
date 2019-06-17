#!/usr/bin/env bash

set -ev

PROJECTID=$(curl -s "http://metadata.google.internal/computeMetadata/v1/project/project-id" -H "Metadata-Flavor: Google")
BUCKET=$(curl -s "http://metadata.google.internal/computeMetadata/v1/instance/attributes/BUCKET" -H "Metadata-Flavor: Google")
APP_NAME=$(curl -s "http://metadata.google.internal/computeMetadata/v1/instance/attributes/APP_NAME" -H "Metadata-Flavor: Google")
JDK=$(curl -s "http://metadata.google.internal/computeMetadata/v1/instance/attributes/JDK" -H "Metadata-Flavor: Google")

echo "Project ID: ${PROJECTID} Bucket: ${BUCKET} Application: ${APP_NAME} JDK: ${JDK}"

sudo apt-get update
sudo apt-get -qy install jq

pushd /opt

case $JDK in

graalvm-ce)
  graalvm="graalvm-ce-linux-amd64-19.0.0.tar.gz"
  gsutil cp "gs://${BUCKET}/jdks/$graalvm" .
  tar -xzf ${graalvm} && rm ${graalvm}
  ;;

graalvm-ee)
  graalvm="graalvm-ee-linux-amd64-19.0.1.tar.gz"
  gsutil cp "gs://${BUCKET}/jdks/$graalvm" .
  tar -xzf ${graalvm} && rm ${graalvm}
  ;;

*)
  download_link=$(curl -L 'https://api.adoptopenjdk.net/v2/info/nightly/openjdk8?openjdk_impl=hotspot&os=linux&arch=x64&type=jdk&release=latest' | jq -r '.binaries[0].binary_link')
  curl -L $download_link | tar -xz
  ;;

esac

sudo update-alternatives --install /usr/bin/java java $(find ~+ -type f -name "java" | grep -v jre) 1
sudo update-alternatives --config java

gsutil cp "gs://${BUCKET}/apps/${APP_NAME}" .

java -jar ${APP_NAME}