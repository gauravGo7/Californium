const express = require('express');
const { get, chunk, union } = require('underscore');
const lodash=require('lodash')
const router = express.Router();
// const intro = require('./introduction')
// const employee = require('./employee')
const _ = require('underscore')
const welcome=require('../logger/logger')
const currdate=require('../util/helper')
const currmon=require('../util/helper')
const batchinfo=require('../util/helper')
const trimdata=require('../validator/formatter')
const myydata=require('../validator/formatter');
const { tail, fromPairs} = require('lodash');


router.get('/test-me', function (req, res) {
    welcome.wecome1('Gaurav')
    currdate.date1(new Date())
    currmon.month1()
    batchinfo.getBatchInfo1()
    myydata.mydata1()
    const array=["january","february","march","april","may","june","july","august","september","october","november","december"]
    const chunkSize=chunk(array,3)
    console.log(chunkSize)
    const anotherArray=[1,3,5,7,9,11,13,15,17,19]
    const tailArray=tail(anotherArray,9)
    console.log(tailArray)
    const uni=union([11,12,13],[5,6,8,3],[11,6,3,9],[5,6,9,1,4],[32,7,5,21])
    console.log(uni)
    const pairs=[["horror","anabella"],["drama","rush hour"],["thriller","avengers endgames"],["fantasy","baywatch"]]
    const from=fromPairs(pairs)
console.log(from)


    // console.log("email from introduction module", intro.myEmail)
    // intro.myFunction('Sabiha')
    // console.log("email from employee module", employee.myEmail)

    // const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    // let result = _.first(days, 4)
    // console.log(`Result from underscore function is ${result}`)


    res.send('any dummy text')
});


router.get('/test-you', function(req, res){
    console.log("I am here")
    res.send("very important text")
})


module.exports = router;