const mysql = require("mysql2");
const logger = require("../utils/logger");

const connection = mysql.createConnection(process.env.DB_URL);

connection.connect(err => {
  if (err) {
    console.error("Error DB:", err);
  } else {
    console.log("DB conectada");
  }
});

module.exports = connection;

