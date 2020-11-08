const express = require("express");
const router = express.Router();
const connectDB = require("../connection");
const Product = require("../models/product");

connectDB().then(() => {
    console.log("MongoDB connection is established");
});

router.get("/products", async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

router.get("/product/:id", async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.json([product]);
});

/*
    {
        name: {type: String},
        img: {type: String},
        price: {type: Number},
        price_history: {type: Date},
        category: {type: String}
    }
*/

router.get("/product-add", async (req, res) => {
    const a = new Date();
    const product = new Product(
        {
            name: "sen ağlama bir damla göz yaşın yeter",
            img: "server/src/data/images/pc1.jpg",
            price: 15.65,
            price_history: a,
            category: "badem - sen ağlama",
        }
    );
    await product
            .save()
            .then(() => console.log("Product Created"));

            res.send("Product Created \n");
});

router.get("/deleteOne", async (req, res) => {
    const products = await Product.findByIdAndDelete("5fa68df47fec0d53f3153c4e");

    res.send("asdf");
});

module.exports = router;