const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/createUser", UserController.createUser  )
router.get("/getUsersData", UserController.getUsersData)
router.get("/basicRoute", UserController.basicCode)







module.exports = router;