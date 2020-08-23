const express = require("express");
const userRoutes = express.Router();
// const path = require('path');

// Require user model in our routes module
let User = require("./user.model");

// Defined store route
userRoutes.route("/add").post(function(req, res) {
  let user = new User(req.body);
  user
    .save()
    .then(() => {
      res.status(200).json({ business: "business in added successfully" });
    })
    .catch(() => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
userRoutes.route("/").get(function(req, res) {
  User.find(function(err, users) {
    if (err) {
      res.json(err);
    } else {
      res.json(users);
    }
  });
});

module.exports = userRoutes;
