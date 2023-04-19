const CustomError = require("../error/error");

const createQuiz = (req, res) => {
  res.status(200).json({ success: true, msg: "create quiz" });
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
