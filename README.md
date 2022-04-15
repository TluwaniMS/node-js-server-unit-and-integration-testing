# node-js-server-unit-and-integration-testing

# About Repository:
This is a basic node-js server that I created to show the basics of implementing both unit and integration tests.

# Software(s) required:
* Latest stable version of Node Package Manager
* MongoDB Database

# Project Setup:
## NB!
Please make sure you have a running instance of Mongodb.

* Step 1:

Switch to the projects root directory and run `npm install` to install the required packages.

* Step 2:

In the projects root directory create a `.env` file and add the following variables:

`PORT`

`MONGO_URI`

`MONGO_TEST_URL`

* Step 3:

Run `npm  run dev` to start-up the server and access the end-points on `http://localhost:PORT`.

* Step 4:

How to run tests:

`Unit Tests` 

```
npm run test:unit-business
```

`Integration Tests (database queries)` 

```
npm run test:database
```

`Integration Tests (end-points)`

```
npm run test:endPoint
```

# Dependencies:
* EXPRESS
* MONGOOSE
* MORGAN
* CORS
* SUPERTEST

# Dev-dependencies:
* DOTENV
* NODEMON
* JEST
