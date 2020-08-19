// post.model.js
export { };
const express = require("express");
const postRoutes = express.Router();
const path = require('path');

// Require Post model in our routes module
let Post = require("./post.model");

// Defined store route
postRoutes.route("/add").post(function (req: any, res: any) {
  let post = new Post(req.body);
  post
    .save()
    .then(() => {
      res.status(200).json({ business: "business in added successfully" });
    })
    .catch(() => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
postRoutes.route("/").get(function (req: any, res: any) {
  Post.find(function (err: string, posts: any) {
    if (err) {
      res.json(err);
    } else {
      res.json(posts);
    }
  });
});

// Defined edit route
postRoutes.route("/edit/:id").get(function (req: any, res: any) {
  let id = req.params.id;
  Post.findById(id, function (err: string, post: any) {
    if (err) {
      res.json(err);
    }
    res.json(post);
  });
});

//  Defined update route
postRoutes.route("/update/:id").post(function (req: any, res: any) {
  Post.findById(req.params.id, function (err: string, post: any) {
    if (!post) res.status(404).send("data is not found");
    else {
      post.title = req.body.title;
      post.body = req.body.body;
      post
        .save()
        .then(() => {
          res.json("Update complete");
        })
        .catch(() => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
postRoutes.route("/delete/:id").delete(function (req: any, res: any) {
  Post.findByIdAndRemove({ _id: req.params.id }, function (err: string) {
    if (err) res.json(err);
    else res.json("Successfully removed");
  });
});

if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('build'));

  app.get('*', (req: any, res: any) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
  })
}

module.exports = postRoutes;
