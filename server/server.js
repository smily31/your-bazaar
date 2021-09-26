require("dotenv").config();

const express = require("express");
const { errorHandler } = require("./middlewares/errorMiddleware");
const products = require("./data/products");
const connectDb = require("./config/config");
const productRoutes = require("./routes/productsRoute");
const usersRoutes = require("./routes/usersRoute");

// connecting to mongodb database
connectDb();

const app = express();

// middleware bodyparser
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get("/", (req,res) => {
    res.send("welcome to backend");
});

app.use(errorHandler);
app.use("/api", productRoutes);
app.use("/api/users", usersRoutes);


port = process.env.PORT;

app.listen(port, () => {
    console.log(`server running at port ${port}`);
});