const router = require("express").Router();
const Post = require('../models/postmodel');
const User = require('../models/usermodel');
const requirelogin = require('../middileware/requirelogin')

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
//////////////// TO UPDATE THE POSTS /////////
router.put("/post/:id",(req,res)=>{
    console.log('this is id',req.params.id)
    console.log(req.body)
    const promise = Post.findByIdAndUpdate(req.params.id,req.body);
    promise.then((data)=>{
     res.json(data);
    }).catch((err)=>{
     res.json(err);
    })
   })

////////////// TO ADD LIKE POST ////////////
// router.put('/like', requirelogin,(req,res)=>{
//     console.log('fine')
//     Post.findByIdAndUpdate(req.body.postId, {
//         $push:{likes:req.user._id}
//     },{
//         new:true
//     }).exec((err,result)=>{
//         if(err){
//             return res.status(422).json({error:err})
//         }else{
//             res.json(result)
//         }
//     }) // this will come with the req
// })

////////////// TO DISLIKE POST ////////////
// router.put('/unlike', requirelogin,(req,res)=>{
//     Post.findByIdAndUpdate(req.body.postId, {
//         $push:{likes:req.user._id}
//     },{
//         new:true // so this will make mongo to update new recored for us instade of returning an old recored , why ? dont ask ! 
//     }).exec((err,result)=>{
//         if(err){
//             return res.status(422).json({error:err})
//         }else{
//             res.json(result)
//         }
//     }) // this will come with the req
// })

//////////////// LIKE /////////////
router.put("/like/:id",(req,res)=>{
    console.log('this is post id',req.params.id)
    console.log('this is the user',req.body)
    const promise = Post.findByIdAndUpdate(req.params.id, {
      $push:{likes:req.body.userId}
     }).exec((err,result)=>{
        if(err){
          return res.status(422).json({error:err})
          }else{
         res.json(result)
     }
            })
   })

////////////// unlike ///////////////
// router.put("/unlike/:id",(req,res)=>{
//     console.log('this is post id',req.params.id)
//     console.log('this is the user',req.body)
//      Post.findByIdAndUpdate(req.params.id, {
//       $pull:{likes:req.body.userId}
//      }).exec((err,result)=>{
//         if(err){
//           return res.status(422).json({error:err})
//           }else{
//          res.json(result)
//      }
//             })
//    })


module.exports = router;




// 602f9e9b7a9ce92b9430a358



// 6023f5d43843451f5889a3f0

