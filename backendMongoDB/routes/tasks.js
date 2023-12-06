const router = require("express").Router();
let Task = require("../models/tasks.model");

router.route("/").get((req, res) => {
  Task.find()
    .then((tasks) => res.json({ result: tasks }))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/").post((req, res) => {
  console.log(req.body);

  const text = req.body.text;
  const reminder = req.body.reminder;
  const day = req.body.day;

  const newTask = new Task({
    text,
    reminder,
    day,
  });

  newTask
    .save()
    .then(() => res.json({result: newTask}))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Task.findById(req.params.id)
    .then((task) => res.json({result: task}))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Task.findByIdAndDelete(req.params.id)
    .then(() => res.json({result: true}))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").put((req, res) => {
  Task.findById(req.params.id)
    .then((task) => {
      task.reminder = !task.reminder;

      task
        .save()
        .then(() => res.json({result: task}))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
