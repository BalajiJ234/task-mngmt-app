const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
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
    secret:
      process.env.SESSION_SECRET ||
      "L3LwGfcSzYF/JKmhbQzIMUEcKKLSv1mi7hf5aELOhnY=", // Replace with your secret key
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

const User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

app.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET || "imRn6eKh0G14hs6/gVpUV1Mk8u0yLYc="
    );
    req.session.userId = user.id;
    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// User logout route
app.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send("Error logging out");
    }
    res.send("Logout successful");
  });
});

app.listen(3002, () => {
  console.log("User service running on port 3002");
});
