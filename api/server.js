// server.js

// const morgan=require('morgan')
// const fs=require('fs')
// const jwt = require('jsonwebtoken');
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 8081;
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./DB.js");
const postRoute = require("./post.route");
const path = require("path");
const fs = require("fs");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const passportJWT = require("passport-jwt");
const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;
const flash = require("express-flash");
const session = require("express-session");

// const initializePassport = require("./passport-config");
// // const { userSetter } = require("core-js/fn/symbol");
// initializePassport(passport, email => {
//   users.find(user => user.username === username);
// });

const jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
jwtOptions.secretOrKey = "movieratingapplicationsecretkey";

mongoose.Promise = global.Promise;
mongoose
  .connect(config.DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
  })
  .then(
    () => {
      console.log("Database is connected");
    },
    err => {
      console.log("Can not connect to the database" + err);
    }
  );

app.use(cors());
app.use(passport.initialize());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/posts", postRoute);
app.use(flash());
app.use(
  session({
    secret: process.env.DB_PASS,
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.listen(PORT, function() {
  console.log("Server is running on Port:", PORT);
});

//



// // Include controllers
// fs.readdirSync("api/controllers").forEach(function(file) {
//   if (file.substr(-3) == ".js") {
//     const route = require("./controllers/" + file);
//     route.controller(app);
//   }
// });
