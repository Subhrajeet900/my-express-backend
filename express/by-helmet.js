const express = require("express");
const helmet = require("helmet");

const app = express();

// Enable Helmet middleware
app.use(helmet());

// Set up a simple endpoint
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
