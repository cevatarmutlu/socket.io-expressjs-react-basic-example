// Connection Server-Side to Docker-MongoDB
const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/egemsoft";

const connectDB = () => {
    return mongoose.connect(
        uri,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );
};

module.exports = connectDB;