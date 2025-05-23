// backend/server.js

const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs"); // Import bcryptjs
const jwt = require("jsonwebtoken"); // Import jsonwebtoken
const { Pool } = require("pg"); // Import Pool from pg for PostgreSQL

const app = express();
const PORT = process.env.PORT || 5001;

// Secret key for JWT - IMPORTANT: Use a strong, unique key from environment variables in production
const JWT_SECRET = process.env.JWT_SECRET || "supersecretjwtkey"; //

// Configure CORS
const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));

// Middleware to parse JSON bodies
app.use(express.json());

// PostgreSQL Pool setup
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, //
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false, // Adjust SSL for production
});

// Test database connection
pool.connect((err, client, release) => {
  if (err) {
    return console.error("Error acquiring client", err.stack);
  }
  client.query("SELECT NOW()", (err, result) => {
    release();
    if (err) {
      return console.error("Error executing query", err.stack);
    }
    console.log("PostgreSQL connected:", result.rows[0].now);
  });
});

// Basic route
app.get("/", (req, res) => {
  res.send("Welcome to the Trip Planner Backend API with CORS enabled!");
});

// API Endpoints:

// 1. User Registration: /api/register
app.post("/api/register", async (req, res) => {
  const { email, password } = req.body; //

  if (!email || !password) {
    //
    return res.status(400).json({ message: "Please enter all fields" }); //
  }

  try {
    // Check if user already exists
    const userExists = await pool.query(
      //
      "SELECT * FROM users WHERE email = $1",
      [email] //
    );

    if (userExists.rows.length > 0) {
      //
      return res
        .status(400)
        .json({ message: "User with this email already exists" }); //
    }

    // Hash password
    const salt = await bcrypt.genSalt(10); //
    const hashedPassword = await bcrypt.hash(password, salt); //

    // Save user to database
    const newUser = await pool.query(
      //
      "INSERT INTO users (email, password_hash) VALUES ($1, $2) RETURNING id, email", //
      [email, hashedPassword] //
    );

    // Generate JWT
    const token = jwt.sign({ id: newUser.rows[0].id }, JWT_SECRET, {
      expiresIn: "1h",
    }); //

    res.status(201).json({
      //
      message: "User registered successfully", //
      token, //
      user: {
        //
        id: newUser.rows[0].id, //
        email: newUser.rows[0].email, //
      },
    });
  } catch (error) {
    //
    console.error("Registration error:", error); //
    res.status(500).json({ message: "Server error during registration" }); //
  }
});

// 2. User Login: /api/login
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body; //

  if (!email || !password) {
    //
    return res.status(400).json({ message: "Please enter all fields" }); //
  }

  try {
    // Check if user exists
    const user = await pool.query(
      //
      "SELECT * FROM users WHERE email = $1",
      [email] //
    );

    if (user.rows.length === 0) {
      //
      return res.status(400).json({ message: "Invalid credentials" }); //
    }

    const foundUser = user.rows[0]; //

    // Compare passwords
    const isMatch = await bcrypt.compare(
      password,
      foundUser.password_hash
    ); //

    if (!isMatch) {
      //
      return res.status(400).json({ message: "Invalid credentials" }); //
    }

    // Generate JWT
    const token = jwt.sign({ id: foundUser.id }, JWT_SECRET, {
      expiresIn: "1h",
    }); //

    res.status(200).json({
      //
      message: "Logged in successfully", //
      token, //
      user: {
        //
        id: foundUser.id, //
        email: foundUser.email, //
      },
    });
  } catch (error) {
    //
    console.error("Login error:", error); //
    res.status(500).json({ message: "Server error during login" }); //
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); //
  console.log(`Access it at: http://localhost:${PORT}`); //
});
