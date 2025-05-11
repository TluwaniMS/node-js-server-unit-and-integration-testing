import { connection, disconnect } from 'mongoose';
import { createDatabaseConnectionAndPopulateDatabase } from './database-config-service';

export const runSetupAndTearDownscripts = async () => {
  beforeAll(async () => {
    await createDatabaseConnectionAndPopulateDatabase();
  });

  afterAll(async () => {
    await connection.db.dropDatabase();
    await disconnect();
  });
};
