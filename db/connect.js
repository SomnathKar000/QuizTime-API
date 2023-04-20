const mySql = require("mysql");

const connection = mySql.createPool({
  host: "localhost",
  user: "root",
  password: process.env.MYSQLPASSWORD,
  database: "quiz_data",
});

module.exports = connection;
