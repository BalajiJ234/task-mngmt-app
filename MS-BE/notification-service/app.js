const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("mssql://sa:124253BrJd@localhost:1433/todo_db");

const app = express();
app.use(express.json());

sequelize
  .authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

const Notification = sequelize.define("Notification", {
  taskId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "pending",
  },
});

app.post("/notifications", async (req, res) => {
  try {
    const notification = await Notification.create(req.body);
    res.status(201).json(notification);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(3003, () => {
  console.log("Notification service running on port 3003");
});
