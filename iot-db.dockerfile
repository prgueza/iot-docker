# Source image
FROM mongo
# Install wget
RUN apt-get update && apt-get install wget
# Set database name as application
ENV MONGO_INITDB_DATABASE=application
# Set the api url as an envieroment variable for the build process
ARG API_URL="http://localhost:4000/"
ENV API_URL=$API_URL
# Get seed data so it can initialize the db
WORKDIR /docker-entrypoint-initdb.d/
RUN wget https://raw.githubusercontent.com/pedro-rodalia/iot-docker/master/seed-data.js
