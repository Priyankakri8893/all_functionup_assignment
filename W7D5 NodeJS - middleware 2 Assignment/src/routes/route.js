const express = require('express');
const router = express.Router();
const orderController= require("../controllers/orderController")
const productController= require("../controllers/productController")
const userController= require("../controllers/userController")


router.post("/createUser", userController.createUser)
router.post("/createProduct", productController.createProduct)
router.post("/createOrder", orderController.createOrder)

module.exports = router;