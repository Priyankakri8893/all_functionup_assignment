const express = require('express');
const router = express.Router();
const AuthorController= require("../controllers/authorController")
const BookController= require("../controllers/bookController")


router.post("/createBook", BookController.createBook);
router.post("/createAuthor", AuthorController.createAuthor);
router.get("/getBook", BookController.getBook)
router.get("/findAuthor", BookController.findAuthor);
router.get("/findBook", BookController.findBook);


module.exports = router;