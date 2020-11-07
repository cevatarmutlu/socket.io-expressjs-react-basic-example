const express = require("express");
const router = express.Router();
const connectDB = require("../connection");

connectDB().then(() => {
    console.log("MongoDB connection is established");
});

module.exports = router;