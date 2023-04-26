const CustomError = require("../error/error");
const pool = require("../db/connect");

const createQuiz = (req, res) => {
  let { question, options, answer, startDate, endDate, status } =
    req.body.quizData;

  if (!(question && options && answer && startDate && endDate && status)) {
    throw new CustomError("Enter proper details", 404);
  }

  options = JSON.stringify(options);
  startDate = startDate.split("T").join(" ");
  endDate = endDate.split("T").join(" ");
  pool.query(
    `INSERT INTO quiz_table (question, options, answer, startDate, endDate, status) VALUES ('${question}', '${options}', ${answer}, '${startDate}', '${endDate}', '${status}');`,
    (err, result) => {
      if (err) {
        console.log(err);
        throw new CustomError("Error occured", 404);
      } else {
        console.log(result);
        res.status(200).json({ success: true, msg: "create quiz" });
      }
    }
  );
};

const getAllActiveQuizzes = (req, res) => {
  pool.query(
    `SELECT * FROM quiz_table WHERE status="active";`,
    (err, result) => {
      if (err) {
        console.log(err);
        throw new CustomError("Some error occured", 400);
      }
      if (result.length === 0) {
        throw new CustomError("No quiz exists", 404);
      }
      let data = [...result];
      data.forEach((item) => {
        item.options = JSON.parse(item.options);
      });
      return res
        .status(200)
        .json({ status: true, msg: "Get all active quizes", data: data });
    }
  );
};

const getAllquizzes = (req, res) => {
  pool.query("SELECT * FROM quiz_table;", (err, result) => {
    if (err) {
      throw new CustomError("Some error occured", 400);
    }
    if (result.length === 0) {
      throw new CustomError("No quiz exists", 404);
    }
    let data = [...result];
    data.forEach((item) => {
      item.options = JSON.parse(item.options);
    });

    return res
      .status(200)
      .json({ status: true, msg: "Get all quizes", data: data });
  });
};

const getQuizResultById = (req, res) => {
  const id = req.params.id;
  pool.query(`SELECT * FROM quiz_table WHERE id=${id};`, (err, result) => {
    if (err) {
      throw new CustomError("Some error occurred", 400);
    }

    if (result.length === 0) {
      throw new CustomError("Enter a valid Id ", 404);
    }

    result[0].options = JSON.parse(result[0].options);
    return res
      .status(200)
      .json({ status: true, msg: "Get quiz result by id", data: result });
  });
};

module.exports = {
  createQuiz,
  getQuizResultById,
  getAllquizzes,
  getAllActiveQuizzes,
};
