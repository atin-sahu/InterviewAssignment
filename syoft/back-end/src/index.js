const express = require("express");
const connectDB = require("./config/db");
const userController = require("./controller/user.controller");
const productController = require("./controller/product_controller");
const app = express();
app.use(express.json());
app.use("/users", userController);
app.use("/products", productController);

app.listen(5000, async () => {
  try {
    await connectDB();
    console.log("listening port 5000");
  } catch (err) {
    console.log(err);
  }
});
