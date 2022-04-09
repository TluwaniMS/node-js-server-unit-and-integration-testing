const { connection } = require("mongoose");
const { createDatabaseConnectionAndPopulateDatabase } = require("./database-config-service");

const runSetupAndTearDownscripts = async () => {
  beforeAll(async () => {
    await createDatabaseConnectionAndPopulateDatabase();
  });

  afterAll(async () => {
    await connection.db.dropDatabase();
  });
};

module.exports = { runSetupAndTearDownscripts };
