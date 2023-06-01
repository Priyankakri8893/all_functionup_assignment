const express = require('express');
const router = express.Router();
const userControllers= require("../controllers/userController")
const auth = require("../middleware/auth")


router.post("/createUser", userControllers.createUser)
router.post("/loginUser", userControllers.loginUser)
router.get("/getUserData/:userId", userControllers.getUserData)
router.put("/updateUserData/:userId", userControllers.updateUserData)
router.delete("/deleteUserData/:userId", userControllers.deleteUserData)

module.exports = router;