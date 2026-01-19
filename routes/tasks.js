const express = require("express");
const router = express.Router();

let tasks = [];

// GET all tasks
router.get("/", (req, res) => {
  res.json(tasks);
});

// POST create task
router.post("/", (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const task = {
    id: Date.now(),
    title,
    status: "todo",
  };

  tasks.push(task);
  res.status(201).json(task);
});

// PUT update task
router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  task.title = req.body.title ?? task.title;
  task.status = req.body.status ?? task.status;

  res.json(task);
});

// DELETE task
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  tasks = tasks.filter((t) => t.id !== id);
  res.json({ message: "Task deleted" });
});

module.exports = router;
