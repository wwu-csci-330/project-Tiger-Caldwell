const mysql = require("mysql");
require("dotenv").config();

const db = mysql.createConnection({
  host: process.env.HOST,
  port: process.env.MYSQLPORT,
  user: "root",
  password: "",
  database: process.env.DATABASE,
});


module.exports=db;