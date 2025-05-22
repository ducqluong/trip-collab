// trip-planner-backend/server.js

const express = require("express");
const cors = require("cors"); // Import the cors package
const app = express();
const PORT = process.env.PORT || 5001;

// Configure CORS
// In development, allow requests from your Next.js frontend's origin
const corsOptions = {
  origin: "http://localhost:3000", // Allow requests from your Next.js dev server
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Specify allowed methods
  credentials: true, // Allow cookies to be sent with requests (if needed later)
  optionsSuccessStatus: 204, // Some legacy browsers (IE11, various SmartTVs) choke on 200
};
app.use(cors(corsOptions)); // Use the cors middleware with your options

// Middleware to parse JSON bodies
app.use(express.json());

// Define a basic route
app.get("/", (req, res) => {
  res.send("Welcome to the Trip Planner Backend API with CORS enabled!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Access it at: http://localhost:${PORT}`);
});
