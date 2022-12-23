const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const commonMW1 = require ("../middlewares/commonMiddlewares")
const commonMW2 = require ("../middlewares/myMiddlewares")
const productController= require("../controllers/productController")
const orderController= require("../controllers/orderController")
const useerController= require("../controllers/useerController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", commonMW1.abc, BookController.createBook  )
router.post("/basicRoute", commonMW1.mid1, commonMW1.mid2, commonMW1.mid3, commonMW1.abc, UserController.basicCode, commonMW1.mid4)
router.post("/createProduct", productController.createProduct)
router.post("/createUseer",commonMW2.mid1, useerController.createUseer)
router.post("/createOrder",commonMW2.mid1, orderController.createOrder)

module.exports = router;

