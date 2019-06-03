# Source image
FROM mongo
# Install wget
RUN apt-get update && apt-get install wget
# Set database name as application
ENV MONGO_INITDB_DATABASE=application
# Get seed data so it can initialize the db
WORKDIR /docker-entrypoint-initdb.d/
RUN wget https://raw.githubusercontent.com/pedro-rodalia/iot-docker/master/seed-data.js
