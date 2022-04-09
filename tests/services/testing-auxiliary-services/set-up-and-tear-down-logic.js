const { connection, disconnect } = require("mongoose");
const { createDatabaseConnectionAndPopulateDatabase } = require("./database-config-service");

const runSetupAndTearDownscripts = async () => {
  beforeAll(async () => {
    await createDatabaseConnectionAndPopulateDatabase();
  });

  afterAll(async () => {
    await connection.db.dropDatabase();
    await disconnect();
  });
};

module.exports = { runSetupAndTearDownscripts };
