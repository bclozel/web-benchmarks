FROM node:11-alpine

# Compile wrk2
RUN apk add --update alpine-sdk openssl-dev && apk add --no-cache git
RUN git clone https://github.com/giltene/wrk2.git && cd wrk2 && make && cd ..
RUN mv wrk2/wrk /bin/wrk && rm -rf wrk2

# Install client application
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

# Replace with inline env variables when running the container
ENV GITHUB_TOKEN=default
ENV SLACK_WEBHOOK_URL=default
ENV APP_NAME=spring-app.jar
ENV SERVER_HOST=localhost:8080

CMD ["sh", "-c", "node bin/client.js -v --gist --slack ${APP_NAME} ${SERVER_HOST}"]