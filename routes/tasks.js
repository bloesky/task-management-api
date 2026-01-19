const express = require("express");
const router = express.Router();

let tasks = [];
let idCounter = 1;

// GET all tasks
router.get("/", (req, res) => {
  res.json(tasks);
});

// POST new task
router.post("/", (req, res) => {
  const { title } = req.body;
  const task = { id: idCounter++, title };
  tasks.push(task);
  res.status(201).json(task);
});

// PUT update task
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(t => t.id === id);
  if (!task) return res.status(404).json({ message: "Task not found" });

  task.title = req.body.title;
  res.json(task);
});

// DELETE task
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  tasks = tasks.filter(t => t.id !== id);
  res.json({ message: "Task deleted" });
});

module.exports = router;
