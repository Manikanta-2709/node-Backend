const express = require("express");
const app = express();

const connectdb = require("./config/db");
const productRoutes = require("./routes/productroutes");
const authRoute = require("./routes/authRoute");
const { register } = require('./controllers/authController');
app.use(express.json());
app.use("/uploads", express.static("uploads"));


connectdb();

app.use("/api/v1", productRoutes);
app.use("/auth", authRoute);


app.get("/", (req, res) => {
    res.send("Server Working");
});

app.listen(3002, () => {
    console.log("Server Started");
});