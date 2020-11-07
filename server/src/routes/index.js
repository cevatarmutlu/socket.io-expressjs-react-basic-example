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
            img: "sen üzülmü gülüm gamzende güllerin biter",
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

module.exports = router;