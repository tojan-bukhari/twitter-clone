const jwt = require('jsonwebtoken');
const User = require('../models/usermodel');

// module.exports = (req,res,next)=>{
    // const {autherization} = req.headers

    // if(!autherization){
    //     return res.status(401).json({error:"you must be logged in "})

    // }
    // const token = autherization.replace("bearer", "")
    // jwt.verify(token, process.env.JWT_SECRET,(err,payloade)=>{
    //     if(err){
    //         return res.status(401).json({error:"you must be logged in"})
    //     }

//         const {_id}=payloade 
//         User.findbyId(_id).then(userdata=>{
//             req.user = userdata
//         })
//         next()
//     })
// }