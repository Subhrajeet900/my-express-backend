'use strict';

const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');

const app = express();

app.use(session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: false
}));

app.use(flash());
