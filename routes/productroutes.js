const express = require("express");
const router = express.Router();
const multer = require("multer");

const {
    addProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
} = require("../controllers/controllerlogic");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage });

// Routes
router.post("/add/products", upload.single("image"), addProduct);

router.get("/get/products", getProducts);

router.get("/get/products/:id", getProductById);

router.put("/update/products/:id", updateProduct);

router.delete("/del/products/:id", deleteProduct);

module.exports = router;