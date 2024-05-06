const express = require("express");
const morgan = require("morgan");


const PORT = process.env.PORT || 5000;
const app = express();

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(morgan("dev"));

// base route
app.get("/", (req, res) => {
    res.send({"message": "Server is running"}).status(200);
})

// start the server
app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT}`)
})