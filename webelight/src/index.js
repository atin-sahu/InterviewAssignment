const express = require("express");
const app = express();
var cors = require('cors')
app.use(cors());
app.use(express.json());
const productController = require("./controllers/product_controller");
app.use("/products",productController );
module.exports = app;