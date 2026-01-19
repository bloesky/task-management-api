const express = require('express');
const app = express();


app.use(express.json());

const taskRoutes = require("./routes/tasks");
app.use("/tasks", taskRoutes);


let tasks = [];

app.get('/', (req, res) => {
    res.send('Task management API is running');
});

app.get('/tasks', (req, res)=> {
    res.json(tasks);
});

app.put('/tasks/:id', (req, res) =>{
    const id = Number(req.params.id);
    const task = tasks.find(t => t.id === id);

    if (!task){
        return res.status(404).json({ message: 'Task not found'});
    }

    task.title = req.body.title || task.title;
    task.status = req.body.status || task.status;

    res.json(task);
});


app.delete('/tasks/:id', (req, res) =>{
    const id = Number(req.params.id);
    tasks = tasks.filter(t => t.id !== id);
    res.json({ message: 'task deleted'});
});

app.post('/tasks', (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: 'Title is required' });
  }

  const task = {
    id: Date.now(),
    title,
    status: 'todo'
  };

  tasks.push(task);
  res.status(201).json(task);
});


app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});


