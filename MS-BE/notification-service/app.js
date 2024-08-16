const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("mssql://sa:124253BrJd@localhost:1433/todo_db");
const session = require("express-session");
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
