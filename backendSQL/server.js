const express = require("express");
const cors = require("cors");
const db = require("./util/db");

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL connected");
});

const port = process.env.PORT || 5001;

const app = express();
app.use(cors());
app.use(express.json());

// app.get("createdb", (req, res) => {
//   let sql = "CREATE DATABASE tasks-sample";
//   db.query(sql, (err) => {
//     if (err) throw err;

//     res.send("Database created");
//   });
// });

const tasksRouter = require('./routes/tasks');
app.use('/tasks', tasksRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
