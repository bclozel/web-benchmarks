FROM google/cloud-sdk:alpine

RUN apk add --no-cache openjdk8 unzip

# Install client application
WORKDIR /opt/bench/

RUN curl -LsS https://repo1.maven.org/maven2/io/gatling/highcharts/gatling-charts-highcharts-bundle/3.0.2/gatling-charts-highcharts-bundle-3.0.2-bundle.zip > gatling.zip \
      && unzip gatling.zip && mv gatling-charts-highcharts-bundle-3.0.2 gatling \
      && rm -rf gatling/user-files/* gatling.zip
    
COPY gatling/ /opt/bench/gatling/user-files/
COPY run.sh /opt/bench/

# Replace with inline env variables when running the container
ENV APP_NAME=spring-app.jar
ENV SERVER_HOST=localhost:8080
ENV SIMULATIONS="TextPlain"
ENV CONCURRENCY=512
ENV SLACK_WEBHOOK_URL=default
ENV BUCKET=default

CMD ["sh", "-c", "/opt/bench/run.sh ${APP_NAME} ${SERVER_HOST} ${SIMULATIONS} ${CONCURRENCY}"]