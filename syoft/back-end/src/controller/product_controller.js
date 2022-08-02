const express = require("express");
const Product = require("../model/product_model");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const products = await Product.find().lean().exec();
    return res.status(200).send(products);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    return res.status(200).send(product);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

module.exports = router;
