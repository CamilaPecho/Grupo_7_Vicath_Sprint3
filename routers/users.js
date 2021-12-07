const express = require("express");
const userController = require("../controllers/usersController");
const router = express.Router();

router.get('/login', userController.login);
router.get('/register', userController.register);
router.get('/profile', userController.verPerfil)

module.exports = router;