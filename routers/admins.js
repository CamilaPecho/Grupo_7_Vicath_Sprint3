const express = require("express");
const adminController = require("../controllers/adminController");
const router = express.Router();


router.get('/productAdd', adminController.productAdd);
router.get('/verProducts', adminController.verProducts);
router.get('/homeAdmin', adminController.verHome)

module.exports = router;