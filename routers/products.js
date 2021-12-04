const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();

router.get('/cart', productController.cart);
router.get('/productDetail', productController.productDetail)


module.exports = router;