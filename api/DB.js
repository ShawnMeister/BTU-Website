require("dotenv").config();


module.exports={
	//to run locally use this
	DB: "mongodb://localhost:27017/mevncrud",

	//to run on atlas use this:
	// DB: `mongodb+srv://admin:${process.env.DB_PASS}@cluster-btu.uplrc.gcp.mongodb.net/mevncrud`,
	// DB: `mongodb+srv://admin:${process.env.DB_PASS}@cluster-btu.uplrc.gcp.mongodb.net/mevncrud`,
};
