const connection = require("../db/connect");
const sequelize = require("sequelize");

const Quiz = connection.query(
  'CREATE TABLE quiz_table (id INT PRIMARY KEY AUTO_INCREMENT,question TEXT NOT NULL,options TEXT NOT NULL,answer INT NOT NULL,startDate DATETIME NOT NULL,endDate DATETIME NOT NULL, status ENUM("active","inactive","finished") DEFAULT "inactive")',
  (err, resuts) => {
    if (err) {
      console.log(err);
    } else {
      console.log(resuts);
    }
  }
);

module.exports = Quiz;
