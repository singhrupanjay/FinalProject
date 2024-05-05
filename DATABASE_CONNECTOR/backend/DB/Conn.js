const mongoose = require("mongoose");


const connectDB = async () => {
  const URI =
    "mongodb+srv://pranitaakash211:9K50JW0ko60l1yFw@cluster0.ono7yl4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  try {
    if (!URI) {
      throw new Error("missing");
    }

    const connect = await mongoose.connect(URI, {
      dbName: "For_Job_Manch",
    });
    console.log("Connected To mongoDB");
  } catch (error) {
    console.log(`ERROR IS ${error}`);
  }
};

module.exports.connectDB = connectDB;
