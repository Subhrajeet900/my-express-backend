const express = require("express");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const app = express();

// Set up Passport session
app.use(passport.initialize());
app.use(passport.session());

// Define user serialization function
passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});

// Register local authentication strategy
passport.use(
    new LocalStrategy(function (username, password, done) {
        User.findOne({ username: username }, function (err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false);
            }
            if (!user.verifyPassword(password)) {
                return done(null, false);
            }
            return done(null, user);
        });
    })
);

// Implement Passport authentication
app.post(
    "/login",
    passport.authenticate("local", { failureRedirect: "/login" }),
    function (req, res) {
        res.redirect("/");
    }
);

// Handle Passport authentication
app.get("/login", function (req, res) {
    res.render("login");
});

// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
