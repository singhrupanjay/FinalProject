import mongoose from "mongoose";

const connectDB = async () => {
    const URI = process.env.MONGO_URI;
    try {
        if (!URI) {
            throw new Error("mongodb+srv://singhrupanjay:XpzOpxSdau5Tpjmh@jobmanchcluster.jcqys1e.mongodb.net/");
        }

        const connect = await mongoose.connect(URI, {
            dbName: "For_Job_Manch",
        });
        console.log("Connected To mongoDB");
    } catch (error) {
        console.log(`ERROR IS ${error}`);
    }
};

export { connectDB };