import { connection, disconnect } from 'mongoose';
import { createDatabaseConnectionAndPopulateDatabase } from './database-config-service';
import { MongoDBContainer } from '@testcontainers/mongodb';

let container;

export const runSetupAndTearDownscripts = async () => {
  beforeAll(async () => {
    container = await new MongoDBContainer('mongo:6.0').start();
    const url = container.getConnectionString();

    await createDatabaseConnectionAndPopulateDatabase(url);
  });

  afterAll(async () => {
    await connection.db.dropDatabase();
    await disconnect();
    await container.stop();
  });
};
