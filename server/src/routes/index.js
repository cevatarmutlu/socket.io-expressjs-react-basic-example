const { json } = require("express");
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

router.get("/add", async (req, res) => {
    const data = JSON.parse(req.query.data);
    console.log(data);
    const product = new Product(data);
    await product
            .save()
            .then(() => console.log("Product Created"));

    res.send("Product Created \n");
});

router.get("/deleteOne", async (req, res) => {
    const products = await Product.findByIdAndDelete("5fa68df47fec0d53f3153c4e");

    res.send("asdf");
});

router.get("/edit/:id", async (req, res) => {
    console.log(req.query);
    Product.findOneAndUpdate({_id: req.params.id}, JSON.parse(req.query.data), {upsert: true}, function(err, doc) {
        if (err) return res.send(500, {error: err});
        return res.send('Succesfully saved.');
    });
});

module.exports = router;