const mongoose = require('mongoose')

require('dotenv').config();

const db = async () => {
    try {
        MONGO_URL = process.env.MONGO_URL

        await mongoose.connect(MONGO_URL , {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("Database Connected");
    } catch (error) {
        console.log("DB connection error", error);
    }
}

module.exports = {db}