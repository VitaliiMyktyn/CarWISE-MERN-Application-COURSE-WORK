const mongoose = require("mongoose");
//Set up default mongoose connection

function connectDB() {
	mongoose.connect(
		"mongodb+srv://L0K1:13042004@carwise-dev.kyz3loz.mongodb.net/CarWISE-DEV",
		{ useNewUrlParser: true, useUnifiedTopology: true }
	);
	const connection = mongoose.connection;
	connection.on("conncected", () => {
		console.log("MongoDB connection successful");
	});
	connection.on("error", () => {
		console.log("MongoDB failed connection");
	});
}

connectDB();
module.export = mongoose;
