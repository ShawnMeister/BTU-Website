// server.js

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 4000;
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./DB.ts");
const postRoute = require("./post.route");
const path = require('path');

mongoose.Promise = global.Promise;
mongoose
  .connect(config.DB, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(
    () => {
      console.log("Database is connected");
    },
    (err: string) => {
      console.log("Can not connect to the database" + err);
    }
  );

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/posts", postRoute);

app.listen(PORT, function () {
  console.log("Server is running on Port:", PORT);
});


if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
  })
}