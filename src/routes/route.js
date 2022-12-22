const express = require('express');
const router = express.Router();
const BookController= require("../controllers/bookController")
const UserController = require("../controllers/usercontroller")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
router.post("/createUser",UserController.createUser)
router.get("/getUsersData",UserController.getUsersData)
router.post("/createmybook",BookController.createBook)
router.post("/createauthor",BookController.createAuthor)
router.get("/bychetan",BookController.listBooks)
router.get("/myUpdate",BookController.updated)
router.get("/diffBetw",BookController.booksCost)

//MOMENT JS
// const moment = require('moment');
// router.get("/dateManipulations", function (req, res) {
    
//     // const today = moment();
//     // let x= today.add(10, "days")

//     // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
//     // console.log(validOrNot)
    
//     const dateA = moment('01-01-1900', 'DD-MM-YYYY');
//     const dateB = moment('01-01-2000', 'DD-MM-YYYY');

//     let x= dateB.diff(dateA, "days")
//     console.log(x)

//     res.send({ msg: "all good"})
// })

module.exports = router;