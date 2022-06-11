FROM node:12-alpine
RUN apk add --no-cache python2 g++ make
WORKDIR /node-js-server-unit-and-integration-testing
COPY . .
RUN npm install --production
CMD ["node", "server.js"]
EXPOSE 5000