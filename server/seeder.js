require("dotenv").config();
const mongoose = require("mongoose");
const users = require("./data/users")
const products = require("./data/products");
const User = require("./models/UserModel");
const Product = require("./models/ProductModel");
const Order = require("./models/OrderModel");
const connectDb = require("./config/config")

connectDb();


const importData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
        const createUser = await User.insertMany(users);
        const adminUser = createUser[0]._id;
        const sampleData = products.map((product) => {
            return { ...product, user: adminUser };
        });
        await Product.insertMany(sampleData);
        console.log('Data imported!!');
        process.exit();
    } catch (error) {
        console.log(`Error at importing is : ${error}`);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
        console.log("Data destroyed !!");
        process.exit();
    } catch (error) {
        console.log(`Error at deletion is : ${error}`)
        process.exit(1);
    }
};


if (process.argv[2] === "-d") {
    destroyData();
} else {
    importData();
}