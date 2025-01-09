const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth/auth-routes");

// app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: [
            "Content-Type",
            "Authorization",
            "Cache-Control",
            "Expires",
            "Pragma",            
        ],
        credentials: true
    })
)

app.use("/api/auth", authRouter);

mongoose.connect('mongodb+srv://bkcxparmar55:IKwHBB8chuw2RNal@cluster0.raqf0.mongodb.net/').then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
})