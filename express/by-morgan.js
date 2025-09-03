const express = require("express");
const morgan = require("morgan");
var port = 3000;
const app = express();

// Set up logging middleware using Morgan
app.use(morgan("tiny"));

// Define a route handler
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

// Start the server
app.listen(3000, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
