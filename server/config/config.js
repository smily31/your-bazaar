require("dotenv").config();

const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log(`Mongodb connected ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error : ${error}`);
        process.exit(1);
    }
};

module.exports = connectDb;
