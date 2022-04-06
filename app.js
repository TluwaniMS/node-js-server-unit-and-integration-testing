const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const app = express();
const studentsroute = require("./routes/students-route");
const schoolsRoute = require("./routes/schools-route");
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));
app.use("/api/students", studentsroute);
app.use("/api/schools", schoolsRoute);

module.exports = {
  app
};
