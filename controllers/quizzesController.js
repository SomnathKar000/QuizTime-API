const CustomError = require("../error/error");
const pool = require("../db/connect");

const createQuiz = (req, res) => {
  // let { question, options, answare, startDate, endDate, status } =
  //   req.body.quizData;

  // answare = parseInt(answare);
  // options = JSON.stringify(options);
  // startDate = startDate.split("T").join(" ");
  // endDate = endDate.split("T").join(" ");
  // startDate = moment
  //   .tz(startDate, "YYYY-MM-DDTHH:mm:ss", "Asia/Kolkata")
  //   .toISOString();
  // endDate = moment
  //   .tz(endDate, "YYYY-MM-DDTHH:mm:ss", "Asia/Kolkata")
  //   .toISOString();
  // pool.query(
  //   `INSERT INTO quiz_table (question, options, answare, startDate, endDate, status) VALUES ('${question}', '${options}', ${answare}, '${startDate}', '${endDate}', '${status}')`,
  //   (err, result) => {
  //     if (err) {
  //       console.log(err);
  //       throw new CustomError("Error occured", 404);
  //     } else {
  //       console.log(result);
  //       res.status(200).json({ success: true, msg: "create quiz" });
  //     }
  //   }
  // );
  pool.query("SELECT * FROM quiz_table", (err, results) => {
    if (err) {
      console.log(err);
      throw new CustomError("Error occured", 404);
    } else {
      console.log(results);
      return res.status(200).json({ success: true, msg: "create quiz" });
    }
  });
};

const getAllActiveQuizzes = (req, res) => {
  res.status(200).json({ status: true, msg: "Get all active quizes" });
};

const getAllquizzes = (req, res) => {
  res.status(200).json({ status: true, msg: "Get all quizes" });
};

const getQuizResultById = (req, res) => {
  const id = req.params.id;
  res.status(200).json({ status: true, msg: "Get quiz result by id", id });
};

module.exports = {
  createQuiz,
  getQuizResultById,
  getAllquizzes,
  getAllActiveQuizzes,
};
