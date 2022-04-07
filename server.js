const { app } = require("./app");
const { connectToDataBase } = require("./database-configuration");
const { getAllStudents } = require("./database-queries/StudentDBQueries");
const { populateDataBaseWithSampleData } = require("./main-migration-script");

const PORT = process.env.PORT | 5000;

app.listen(PORT, () => {
  console.log(`server is running on port: http://localhost:${PORT}/`);
});

(async () => {
  await connectToDataBase();
  const students = await getAllStudents();

  students.length === 0 ? await populateDataBaseWithSampleData() : console.log(`database has already been populated`);
})();
