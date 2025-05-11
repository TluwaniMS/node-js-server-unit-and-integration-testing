import { app } from './app';
import { connectToDataBase } from './database-configuration';
import { getAllStudents } from './database-queries/StudentDBQueries';
import { populateDataBaseWithSampleData } from './main-migration-script';

const PORT = process.env.PORT;
const dataBaseURL = process.env.MONGO_URL;

app.listen(PORT, () => {
  console.log(`server is running on port: http://localhost:${PORT}/`);
});

(async () => {
  await connectToDataBase(dataBaseURL);
  const students = await getAllStudents();

  students.length === 0
    ? await populateDataBaseWithSampleData()
    : console.log(`database has already been populated`);
})();
