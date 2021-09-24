require("dotenv").config();

const mongoose = require("mongoose");

// connecting to mongodb to mongoose
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log(`Mongodb our Database is connected `);
}).catch((error) => {
    console.error(`Error : ${error.message}`);
})
