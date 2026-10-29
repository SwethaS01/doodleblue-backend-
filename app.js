
const express = require("express");
require("dotenv").config();

const connectDB = require("./config/db");
const userRoutes = require("./routes/user.routes");

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.status(200).json({
        message: "DreamEstate API is running"
    });
});

const startServer = async () => {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (err) {
        console.error("Failed to start server:", err.message);
        process.exit(1);
    }
};

startServer();
