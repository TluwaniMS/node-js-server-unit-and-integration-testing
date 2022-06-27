FROM node:12-alpine
RUN apk add --no-cache python2 g++ make
WORKDIR /node-js-server-unit-and-integration-testing
COPY package.json package-lock.json ./
RUN npm install --production
COPY . .
CMD ["node", "server.js"]
EXPOSE 5000