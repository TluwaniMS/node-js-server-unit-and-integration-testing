const { app } = require("./app");
const { connectToDataBase } = require("./database-configuration");

const PORT = process.env.PORT | 5000;

app.listen(PORT, () => {
  console.log(`server is running on port: http://localhost:${PORT}/`);
});

(async () => {
  await connectToDataBase();
})();
