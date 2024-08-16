const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("mssql://sa:124253BrJd@localhost:1433/todo_db");

const app = express();
app.use(express.json());

const RedisStore = require("connect-redis")(session);
const redis = require("redis");

const redisClient = redis.createClient({
  host: "localhost", // Replace with your Redis server host if different
  port: 6379, // Default Redis port
});

redisClient.on("error", (err) => {
  console.error("Redis error: ", err);
});

app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: "L3LwGfcSzYF/JKmhbQzIMUEcKKLSv1mi7hf5aELOhnY=", // Replace with your secret key
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // Set to true if using HTTPS
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24, // Session expiration (1 day in this example)
    },
  })
);

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
