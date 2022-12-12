const express = require('express');
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const _ = require('underscore')
const mentorModule = require('../abc/xyz/myModule'); 
const req = require('express/lib/request');
const { route } = require('express/lib/application');
const firstpro=require('../films/films')



router.get("/movies",function(req, res){
       ( res.send(firstpro.firstpr))
})
router.get('/movies/:indexNumber',function(req,res){
    const secpr=["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    let index=req.params.indexNumber

res.send(secpr[index])}
)

router.get("/films",function(req,res){
   const films1= [ {
        id: 1,
        name: "The Shining"
       }, {
        id: 2,
        name: "Incendies"
       }, {
        id: 3,
        name: "Rang de Basanti"
       }, {
        id: 4,
        name: "Finding Nemo"
       }]
       
    res.send(films1)
})

router.get('/films/:id' ,function(req,res){
    let idparam = req.params
    const filmid=[
        {id:1,
        name:"avengers endgame"},{
            id:2,
            name:"KGF"
        },
        {
            id:3,
            name:"yeh jawaani hai deewani"
        },
        {
            id:4,
            name:"batman rises again"
        }
    ]
    
    if(idparam.id>(filmid.length+1)||idparam.id==0){
        res.send("No such movies exist")
    }
    for(i of filmid){
        if(i.id==idparam.id){
            res.send(i.name)
        }
    }
})

// router.get("/profile-details", function(req, res){
//     // Write the LOGIC here
//     res.send('dummy response')
// })

// router.get('/test-me', function (req, res) {
//     console.log("email from introduction module", intro.myEmail)
//     intro.myFunction('Sabiha')
//     console.log("email from employee module", employee.myEmail)

//     const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
//     let result = _.first(days, 4)
//     console.log(`Result from underscore function is ${result}`)
//     console.log(`The mentor of the day is ${mentorModule.mentor}`)

//     res.send('any dummy text from route handler 1')
// });


// router.get('/test-me', function(req, res){
//     console.log("I am here")
//     res.send("any dummy text from route handler 2")
// })

// router.get('/students', function (req, res){
//     let students = ['Sabiha', 'Neha', 'Akash']
//     res.send(students)
// })

// // PATH Param example
// router.get('/student-details/:name', function(req, res){
//     /*
//     params is an attribute inside request that contains 
//     dynamic values.
//     This value comes from the request url in the form of an 
//     object where key is the variable defined in code 
//     and value is what is sent in the request
//     */

//     let requestParams = req.params

//     // JSON strigify function helps to print an entire object
//     // We can use many ways to print an object in Javascript, JSON stringify is one of them
//     console.log("This is the request "+ JSON.stringify(requestParams))
//     let studentName = requestParams.name
//     console.log('Name of the student is ', studentName)
    
//     res.send('Dummy response')
// })

// // PATH Param example
// router.get("/profile/:name", function(req, res){
//     console.log('Printing the request to find out wjere name is stored',req.params)
//     console.log('user name is',req.params.name)
//     //console.log(`User requesting for profile is ${name}`)
//     res.send("dummy details")
// })

// // Query Param example
// router.get("/shoes", function(req, res){
//     console.log("The filter options for shoes are -",req.query)
//     //req.query.size
//     //req.query.brand
//     res.send("dummy shoes response")
// })

module.exports = router;