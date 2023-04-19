const mySql = require("mysql");

const connection = mySql.createConnection({
  host: "localhost",
  user: "root@localhost",
  password: process.env.MYSQLPASSWORD,
  database: "QUIZ_DATA",
});

module.exports = connection;
