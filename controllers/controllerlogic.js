const Product = require("../models/Product");

// Create Product
const addProduct = async (req, res) => {
    try {
        const product = await Product.create({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            image: req.file.path
        });

        res.status(201).json({
            message: "Product Added",
            product
        });

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

// Get All Products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();

        res.status(200).json({
            message: "All Products",
            products
        });

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

// Get Product By ID
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        res.status(200).json({
            message: "Product Details",
            product
        });

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

// Update Product
const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        res.status(200).json({
            message: "Product Updated",
            product
        });

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

// Delete Product
const deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Product Deleted"
        });

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

module.exports = {
    addProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
};