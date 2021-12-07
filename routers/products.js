const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();

router.get('/cart', productController.cart);
router.get('/productDetail', productController.productDetail)
router.get('/productAdd', productController.productAdd);
router.get('/verProducts', productController.verProducts);


module.exports = router;