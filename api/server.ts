// server.js

import express from "express";
const app = express();
import bodyParser from "body-parser";
const PORT = 4000;
import cors from "cors";
import mongoose from "mongoose";
const config = require("./DB.ts");
const postRoute = require("./post.route");

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {
    console.log("Database is connected");
  },
  (err) => {
    console.log("Can not connect to the database" + err);
  }
);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/posts", postRoute);

app.listen(PORT, function() {
  console.log("Server is running on Port:", PORT);
});
