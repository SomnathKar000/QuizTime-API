const CustomError = require("../error/error");

const createQuiz = (req, res) => {
  throw new CustomError("Custom error", 404);
  //   res.status(200).json({ success: true, msg: "create quiz" });
};

module.exports = { createQuiz };
