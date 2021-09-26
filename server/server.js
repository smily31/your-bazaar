require("dotenv").config();

const express = require("express");
const products = require("./data/products");
const connectDb = require("./config/config");
const productRoutes = require("./routes/productsRoute");
const { errorHandler } = require("./middlewares/errorMiddleware");


connectDb();
const app = express();

port = process.env.PORT;

app.get("/", (req,res) => {
    res.send("welcome to backend");
});

app.use("/api", productRoutes);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`server running at port ${port}`);
});