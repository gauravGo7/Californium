const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController");
const bookModel = require('../models/bookModel.js');
const bookController=require('../controllers/bookController')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)
router.post("/createBook" ,bookController.createBook)
router.get("/getBookData",bookController.getBookData )

module.exports = router;