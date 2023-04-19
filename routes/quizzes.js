const {
  createQuiz,
  getQuizResultById,
  getAllquizzes,
  getAllActiveQuizzes,
} = require("../controllers/quizzesController");
const express = require("express");

const router = express.Router();

router.route("/").post(createQuiz);

router.route("/active").get(getAllActiveQuizzes);

router.route("/:id/result").get(getQuizResultById);

router.route("/all").get(getAllquizzes);

module.exports = router;
