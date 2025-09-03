const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

// use cookie-parser middleware
app.use(cookieParser());

// set a cookie
app.get("/set-cookie", (req, res) => {
    res.cookie("username", "john");
    res.send("Cookie has been set!");
});

// get a cookie
app.get("/get-cookie", (req, res) => {
    const username = req.cookies.username;
    res.send(`The username is: ${username}`);
});

// delete a cookie
app.get("/delete-cookie", (req, res) => {
    res.clearCookie("username");
    res.send("Cookie has been deleted!");
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
