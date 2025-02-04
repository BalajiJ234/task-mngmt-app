require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const TaskSchema = new mongoose.Schema({ title: String, completed: Boolean });
const Task = mongoose.model("Task", TaskSchema);

app.get("/tasks", async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

app.post("/tasks", async (req, res) => {
    const task = new Task(req.body);
    await task.save();
    res.json(task);
});

app.listen(4001, () => console.log("Task Service running on port 4001"));
