#!/usr/bin/env bash

set -ev

APP_NAME=$1
SERVER_HOST=$2
SIMULATIONS=$3
CONCURRENCY=$4

echo "Running simulations: ${SIMULATIONS} on application: ${APP_NAME}"

for simulation in $(echo ${SIMULATIONS} | tr ";" "\n")
do
	JAVA_OPTS="-DbaseUrl=http://${SERVER_HOST} -Dconcurrency=${CONCURRENCY}" /opt/bench/gatling/bin/gatling.sh --run-description "Benchmark for application ${APP_NAME}" -s ${simulation}
	rm /opt/bench/gatling/results/**/simulation.log
done

if [[ $BUCKET ]]; then
	cd /opt/bench/gatling/
	mv results ${APP_NAME}
	tar -czf "/opt/bench/${APP_NAME}.tar.gz" ${APP_NAME}
	gsutil cp "/opt/bench/${APP_NAME}.tar.gz" "gs://${BUCKET}/results/";
fi

if [[ $SLACK_WEBHOOK_URL ]]; then
	curl -X POST --data-urlencode "payload={\"text\": \"Benchmark finished for ${APP_NAME}.\"}" ${SLACK_WEBHOOK_URL};
fi