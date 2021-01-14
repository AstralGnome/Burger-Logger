// Set up MySQL connection.
const mysql = require("mysql");

//Set up connection:
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "burgers_db",
});

//Handle connection:
connection.connect((err) => {
  if (err) {
    console.log("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//Export connection for ORM to use.
module.exports = connection;
