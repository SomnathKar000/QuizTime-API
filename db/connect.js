const mySql = require("mysql");

const connection = mySql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER_NAME,
  password: process.env.DB_PASSWORD,
  database: "quiz_data",
});

module.exports = connection;
