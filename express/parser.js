const express = require("express");
const bodyParser = require("body-parser");
var port = 3000;
const app = express();
app.use(bodyParser.json()); // for application/json parsing
app.use(bodyParser.urlencoded({ extended: true })); // for application/x-www-form-urlencoded parsing

// The logic of Your routes and application is here...

// Listening to your server in port 3000
app.listen(3000, () => {
    console.log(`Server started on port here http://localhost:${port}`);
});
