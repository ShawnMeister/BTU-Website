// post.model.ts

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema for Post
let User = new Schema(
	{
		username: {
			type: String,
		},
		password: {
			type: String,
		},
	},
	{
		collection: "users",
	}
);



module.exports = mongoose.model("User", User);