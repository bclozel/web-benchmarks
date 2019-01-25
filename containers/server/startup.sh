#!/usr/bin/env bash

set -ev

PROJECTID=$(curl -s "http://metadata.google.internal/computeMetadata/v1/project/project-id" -H "Metadata-Flavor: Google")
BUCKET=$(curl -s "http://metadata.google.internal/computeMetadata/v1/instance/attributes/BUCKET" -H "Metadata-Flavor: Google")
APP_NAME=$(curl -s "http://metadata.google.internal/computeMetadata/v1/instance/attributes/APP_NAME" -H "Metadata-Flavor: Google")

echo "Project ID: ${PROJECTID} Bucket: ${BUCKET} Application: ${APP_NAME}"

sudo apt-get update
sudo apt-get install -yq openjdk-8-jdk
sudo update-alternatives --set java /usr/lib/jvm/java-8-openjdk-amd64/jre/bin/java

gsutil cp "gs://${BUCKET}/apps/${APP_NAME}" .

java -jar ${APP_NAME}