const express = require('express');
const { tail } = require('underscore');
const router = express.Router();

const _ = require('underscore')

router.get("/sol1",function(req, res){
    let arr=[1,2,3,5,6,7]
    let n=arr.length-1
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum +=arr[i]
    }
    let missingNumber= (arr[n]*(arr[n]+1))/2-sum
    res.send({data:missingNumber})
})


router.get("/sol2",function(req, res){
    let array=[33,34,35,37,38]
    let n=array.length
    let sum=0
    for(let i=0;i<array.length;i++){
        sum +=array[i]
    }
    let firstDigit= array[0]
   let lastDigit= array.pop()

    let consecutive= (n+1)*(firstDigit+lastDigit)/2
    let missingNumber=consecutive-sum
    res.send({data:missingNumber})
})
module.exports = router;