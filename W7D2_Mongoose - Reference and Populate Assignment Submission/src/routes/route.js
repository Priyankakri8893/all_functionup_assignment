const express = require('express');
const router = express.Router();
const AuthorController= require("../controllers/authorController")
const BookController= require("../controllers/bookController")
const publisherController= require("../controllers/publisherController")


router.post("/createBook", BookController.createBook);
router.post("/createAuthor", AuthorController.createAuthor);
router.post("/createPublisher", publisherController.createPublisher);
router.get("/getdetail", BookController.getdetail);
router.get("/getbooks", BookController.getbooks)

module.exports = router;