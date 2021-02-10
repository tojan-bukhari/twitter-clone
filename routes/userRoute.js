const router = require("express").Router();
const User = require('../models/usermodel');


// router.post('/', (req,res)=>{
//     try{
//     const newuser = new User(req.body)
//         console.log(newuser)
//         newCard.save();
//         res.json(newuser)
//     }
//     catch(err){res.json("sth wrong");} 
// })

// router.route('/').post((req, res) => { //create?
//  const newuser = new User({  
//    username:req.body.username,
//    email:req.body.email ,
//    password:req.body.password
//    }); 
     
//  newuser.save()  
//  .then(() => res.json('user added !'))  
//  .catch(err => res.status(400).json('Error: ' + err));
// });
// router.post('/', (req , res)=>{
//     try {
//         const newuser = new User(req.body);
//         newuser.save();
//         res.json(newuser)
//     }
//     catch(err){res.json("can't save");}    
// })



router.get("/:id", function(req, res) {
    User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json("Error: " + err));
  });
module.exports = router;