const connection = require("../db/connect");

// const createQuizTable=`CREATE TABLE quiz(
//     id INT NOT NULL AUTO_INCREMENT,
//     question TEXT NOT NULL,
//     options TEXT NOT NULL,
//     rightAnswer INT NOT NULL,
//     startDate DATETIME NOT NULL,
//     endDate DATETIME NOT NULL,
//     status ENUM("active", "inactive","finished") DEFAULT "inactive
// )`

const Quiz = connection.define("quiz");
