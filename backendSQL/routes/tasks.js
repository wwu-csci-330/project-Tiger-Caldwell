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
  // write this method yourself
});

/* DELETE A TASK */
router.route("/:id").delete((req, res) => {
  // write this method yourself
});

/* UPDATE A TASK */
router.route("/:id").put((req, res) => {
  // write this method yourself
});

module.exports = router;
