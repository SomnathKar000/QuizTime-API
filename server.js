require("express-async-errors");
require("dotenv").config();

const express = require("express");
const quizzesRoute = require("./routes/quizzes");
const errorHandler = require("./utils/errorHandler");
const notFoundHandler = require("./utils/notFound");
const connection = require("./db/connect");

const app = express();

app.use(express.json());

app.use("/api/v1/quizzes", quizzesRoute);
app.use(errorHandler);
app.use(notFoundHandler);

const start = async () => {
  try {
    await connection.connect();
    app.listen(5000, () => console.log("Server is listening on 5000"));
  } catch (error) {
    console.log(error);
  }
};

start();
