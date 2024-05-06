const express = require("express");
const morgan = require("morgan");


const PORT = process.env.PORT || 5000;
const app = express();

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(morgan("dev"));

// Database Configuration
const { connect_database } = require("./db/connect");
connect_database();

// Authentication Middleware
const verifyToken = require("./middleware/auth")

// Route Imports
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");

// base route
app.get("/", (req, res) => {
    res.send({"message": "Server is running"}).status(200);
});

app.use("/auth", authRoutes);
app.use("/users", verifyToken, userRoutes);

// start the server
app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT}`)
})