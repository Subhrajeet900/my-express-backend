const express = require("express");
const cors = require("cors");

const app = express();

// Enabling CORS for all routes
app.use(cors());

// Defining a route handler
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

// Starting the server
app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
