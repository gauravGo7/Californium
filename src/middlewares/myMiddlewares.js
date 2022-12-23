const mid1= function ( req, res, next) {
    let body = req.body
   // let isFreeAppUser = req.headers
   let isFreeAppUser = req.headers["accept"]

    if(!isFreeAppUser) {
        console.log ("isFreeAppUser is required")
    } 
    next()
}



module.exports.mid1= mid1

// module.exports.mid3= mid3
// module.exports.mid4= mid4
// module.exports.myMiddleware = myMiddleware
// module.exports.myOtherMiddleware = myOtherMiddleware