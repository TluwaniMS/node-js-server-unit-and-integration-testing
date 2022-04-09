const { connectToDataBase } = require("../../../database-configuration");
const dataBaseURL = process.env.MONGO_TEST_URL;

const createDatabaseConnectionAndPopulateDatabase = async () => {
    await connectToDataBase(dataBaseURL)
};
