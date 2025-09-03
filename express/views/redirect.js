const express = require('express');
const app = express();

// homepage shows links
app.get('/', (req, res) => {
    res.send(`
    <h1>Welcome</h1>
    <p>Choose where you want to go:</p>
    <ul>
      <li><a href="/user">Go to User Page</a></li>
      <li><a href="/google">Go to Google</a></li>
      <li><a href="/old">Go to Old Page (will redirect)</a></li>
    </ul>
  `);
});

// simple page
app.get('/user', (req, res) => {
    res.send('<h1>User Page</h1>');
});

// external redirect
app.get('/google', (req, res) => {
    res.redirect('https://www.google.com');
});

// internal redirect
app.get('/old', (req, res) => {
    res.redirect('/new');
});

app.get('/new', (req, res) => {
    res.send('<h1>This is the NEW page</h1>');
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
