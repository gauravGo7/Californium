const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publishcont=require("../controllers/publisherController");

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)
router.post("/createPublisher",publishcont.createPublisher)
router.get("/getPublisher",publishcont.getPublisher)
router.get("/getPublisherWithId",publishcont.getPublisherWithAuthorDetails)

module.exports = router;