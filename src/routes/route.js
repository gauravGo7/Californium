const express = require('express');
const router = express.Router();
const UserController = require("../controllers/userController");
const MiddleWare = require("../middlewares/commonMiddlewares");

router.post("/users", UserController.createUser);
router.post("/login", UserController.loginUser);
router.get("/users/:userId", MiddleWare.userValidation, MiddleWare.tokenAuthentication, MiddleWare.tokenAuthorization, UserController.getUser);
router.put("/users/:userId", MiddleWare.userValidation, MiddleWare.tokenAuthentication, MiddleWare.tokenAuthorization, UserController.updateUser);
router.delete("/users/:userId", MiddleWare.userValidation, MiddleWare.tokenAuthentication, MiddleWare.tokenAuthorization, UserController.deleteUser);
router.post("/users/:userId/posts", MiddleWare.userValidation, MiddleWare.tokenAuthentication, MiddleWare.tokenAuthorization, UserController.postMessage);


module.exports = router;
// const mid1= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid1")
//     // logic
//     let loggedIn = false

//     if (loggedIn== true) { 
//         console.log( "OK LOGGED IS IS TRUE NOW")
//         next ()
//     }
//     else {
//         res.send ("Please login or register")
//     }
// }

// // e.g. restricted and open-to-all API's can be handled like below now:
// router.get('/homePage', mid1, UserController.feeds)
// router.get('/profileDetails', mid1, UserController.profileDetails)
// router.get('/friendList', mid1, UserController.friendList)
// router.get('/changePassword', mid1, UserController.changePassword)

// router.get('/termsAndConditions',  UserController.termsAndConditions)
// router.get('/register',  UserController.register)
// router.get("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.mid4, UserController.basicCode)
// router.get("/basicRoute2", commonMW.mid1, UserController.basicCode2)
// router.get("/basicRoute3", commonMW.mid2, UserController.basicCode3)
// router.get("/basicRoute4", commonMW.mid1, commonMW.mid4, UserController.basicCode4)

