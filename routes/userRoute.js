const router = require("express").Router();
const Post = require('../models/postmodel');
const User = require('../models/usermodel');


// POST REQ BY USER /////////////////////
router.post('/post', (req,res)=>{
    try{
    const newpost = new Post(req.body)
        console.log(newpost)
        newpost.save();
        res.json(newpost)
    }
    catch(err){res.json("sth wrong");} 
})

/////TO GET THE POST 
router.get('/post' , function (req , res) {
  console.log()
   Post.find()
   .then(postFound=>{
       if(!postFound){return res.status(404).json("Can't find the post")}
       return res.status(200).json(postFound)
   })
   .catch(err =>  res.status(500).json("not working"))      
   
} );
////////TO GET THE USER 
router.get("/:id", function(req, res) {
    User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json("Error: " + err));
  });
////////TO GET USER POSTS IN THE PROFILE//./////////////
router.get('/post/:userId' , function (req , res) {
    console.log('this is params',req.params.userId)
   Post.find({"userId":req.params.userId})
   .then(postFound=>{
       if(!postFound){return res.status(404).json("Can't find the post")}
       return res.status(200).json(postFound)
   })
   .catch(err =>  res.status(500).json("not working"))      
   
} );
//////////////// TO UPDATE PROFILE IMAGE ///////////
router.put("/:id",(req,res)=>{
    console.log("the id",req.params.id)
    console.log('the img',req.body)
    const promise = User.findByIdAndUpdate(req.params.id,req.body);
    promise.then((data)=>{
     res.json(data);
    }).catch((err)=>{
     res.json(err);
    })
   })
module.exports = router;