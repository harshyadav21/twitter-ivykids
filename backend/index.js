// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const userRoutes = require("./routes/UserRoutes");
const tweetRoutes = require("./routes/TweetRoutes");

// const DB = process.env.DATABASE;

const DB = process.env.MONGO_DB_URI;
mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Database connected.");
}).catch((err) => {
    console.log("Database error");
    console.log(err);
});



app.use("/api/user", userRoutes);
app.use("/api/tweet", tweetRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});