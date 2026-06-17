const express = require("express");
const app = express();

const connectdb = require("./config/db");
const productRoutes = require("./routes/productroutes");
const authRoute = require("./routes/authRoute");
const movieRoute = require("./routes/movieRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));


connectdb();

app.use("/api/v1", productRoutes);
app.use("/auth", authRoute);
app.use("/movies", movieRoute);


app.get("/", (req, res) => {
    res.send("Server Working");
});

app.listen(3002, () => {
    console.log("Server Started");
});
