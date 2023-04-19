require("express-async-errors");

const express = require("express");
const quizzesRoute = require("./routes/quizzes");
const errorHandler = require("./utils/errorHandler");
const notFoundHandler = require("./utils/notFound");

const app = express();

app.use(express.json());

app.use("/api/v1/quizzes", quizzesRoute);
app.use(errorHandler);
app.use(notFoundHandler);

app.listen(5000, () => console.log("Server listening on port 5000"));
