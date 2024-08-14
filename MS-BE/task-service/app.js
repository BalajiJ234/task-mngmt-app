const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("mssql://sa:124253BrJd@localhost:1433/todo_db");

const app = express();
app.use(express.json());

sequelize
  .authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

const Task = sequelize.define("Task", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  dueDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "pending",
  },
});

// Endpoint to create a new task
app.post("/tasks", async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Start the server
app.listen(3001, () => {
  console.log("Task service running on port 3001");
});
