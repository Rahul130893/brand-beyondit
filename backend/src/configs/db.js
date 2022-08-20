const mongoose = require("mongoose")
require("dotenv").config()
const db= process.env.MongoURI

const connect = () => {
    return mongoose.connect(db);
}
module.exports= connect