require("express-async-errors");
require("dotenv").config();

const express = require("express");
const quizzesRoute = require("./routes/quizzes");
const errorHandler = require("./utils/errorHandler");
const notFoundHandler = require("./utils/notFound");
const pool = require("./db/connect");

const app = express();

app.use(express.json());

app.use("/api/v1/quizzes", quizzesRoute);
app.use(errorHandler);
app.use(notFoundHandler);

const PORT = 5000;

pool.getConnection((err, connection) => {
  if (err) {
    console.log("Unable to connect to the database:", err);
    process.exit(1);
  }
  console.log("Successfully connected to the database!");
  connection.release();
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
