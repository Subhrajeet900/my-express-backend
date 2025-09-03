var express = require('express');
var app = express();
var path = require('path');
var PORT = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static Middleware
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res, next) {
    res.render('home');
})

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log(`Server listening on PORT http://localhost:${PORT}`);
});
