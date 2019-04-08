# Source image
FROM node
# Set environment port and expose it
ARG PORT=3000
ENV PORT=$PORT
EXPOSE $PORT
# Update npm to its latest version
RUN npm i npm@latest -g
# Clone repository
RUN git clone --single-branch --branch master https://github.com/pedro-rodalia/iot-frontend.git
# Move to the directory and install dependencies from the project
WORKDIR /iot-frontend
RUN npm install && npm run build
# Unprivileged user
USER node
# Run the app
CMD ["node", "./bin/www"]
