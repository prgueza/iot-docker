# Source image
FROM mongo
# Set environment port and expose it
ARG PORT=27017
ENV PORT=$PORT
EXPOSE $PORT
# Set database name as application
ENV MONGO_INITDB_DATABASE=application
# Copy seed data so it can initialize the db
WORKDIR /docker-entrypoint-initdb.d/
RUN wget /docker-entrypoint-initdb.d/
COPY seed-data.js /docker-entrypoint-initdb.d/
