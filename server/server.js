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


// app.get("/", (req,res) => {
//     res.send("welcome to backend");
// });

app.use(errorHandler);
app.use("/api", productRoutes);
app.use("/api/users", usersRoutes);

// for deployment on heroku
if(process.env.NODE_ENV === "production")
{
    app.use(express.static("client/build"));
    const path = require("path");
    app.get("*",(req,res) =>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
}


port = process.env.PORT;

app.listen(port, () => {
    console.log(`server running at port ${port}`);
});