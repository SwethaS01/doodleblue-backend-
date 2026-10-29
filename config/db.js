
const mongoose = require("mongoose");

const connectDB = async () => {
    const MONGO_URL = process.env.MONGODB_URL;

    if (!MONGO_URL) {
        throw new Error("MONGODB_URL is missing in .env file");
    }

    try {
        await mongoose.connect(MONGO_URL, {
            serverSelectionTimeoutMS: 10000
        });

        console.log("Connected to MongoDB successfully");
    } catch (err) {
        console.error("Failed to connect to MongoDB:", err.message);
        throw err;
    }
};

module.exports = connectDB;
