const { createQuiz } = require("../controllers/quizzesController");
const express = require("express");

const router = express.Router();

router.route("/").post(createQuiz);

module.exports = router;
