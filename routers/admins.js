const express = require("express");
const adminController = require("../controllers/adminController");
const router = express.Router();


router.get('/productAdd', adminController.createProduct);
router.get('/verProducts', adminController.verProducts);

module.exports = router;