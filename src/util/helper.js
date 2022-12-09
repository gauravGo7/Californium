const { get } = require("underscore")

function date(data){
    console.log(data)
}


function month(){
    const moonLanding = (new Date().getMonth())
    console.log(moonLanding)
}

function getBatchInfo(){
    console.log("Californium, W3D4, the topic for today is Nodejs module system"
    )
}

module.exports.date1=date
module.exports.month1=month
module.exports.getBatchInfo1=getBatchInfo