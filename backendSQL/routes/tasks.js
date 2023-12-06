const router = require("express").Router();
const db = require("../util/db");
const { v4: uuidv4 } = require("uuid");

/* GET ALL TASKS */
router.route("/").get((req, res) => {
  let sql = "SELECT * FROM tasks";

  let query = db.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      throw err;
    }
    res.json({ result: results });
  });
});

/* ADD A NEW TASK */
router.route("/").post((req, res) => {
  const newTask = {
    _id: uuidv4(),
    text: req.body.text,
    reminder: req.body.reminder,
    day: req.body.day,
  };

  let sql = "INSERT INTO tasks SET ?";

  let query = db.query(sql, newTask, (err) => {
    if (err) throw err;
    res.json({ result: newTask });
  });
});

/* GET A TASK */
router.route("/:id").get((req, res) => {
  let sql = "SELECT * FROM tasks WHERE _id = ?";

  let query = db.query(sql, req.params.id, (err, results) => {
    if (err) throw err;
    res.json({ result: results[0] });
  });
});

/* DELETE A TASK */
router.route("/:id").delete((req, res) => {
  let sql = "DELETE FROM tasks WHERE _id = ?";

  let query = db.query(sql, req.params.id, (err) => {
    if (err) throw err;
    res.sendStatus(200)
  })
});

/* UPDATE A TASK */
router.route("/:id").put((req, res) => {
  let sql = "UPDATE tasks SET reminder = !reminder WHERE _id = ?";

  db.query(sql, req.params.id, (err) => {
    if (err) throw err;
    let sql = "SELECT * FROM tasks WHERE _id = ?";
    db.query(sql, req.params.id, (err, results, fields) => {
      if (err) throw err;
      console.log(results[0])
      res.json({ result: results[0] });
    })
  })
});

module.exports = router;
