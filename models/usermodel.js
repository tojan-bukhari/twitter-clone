const mongoose = require('mongoose');

const userSchema = new mongoose.Schema ({
    userName:{
        type: String,
        required : true,
        trim: true,
        max: 255,
        min: 6
    },
    email: {
        type: String,
        required: true,
        trim: true,
        max: 255,
        min: 6
    },
    password: {
        type: String,
        required: true,
        trim: true,
        max: 1000,
        min: 6
    },
    img:{
        typt:String,
      },
     followers:[{
         type:String
         
      }],
      following:[{
        type:String
        
     }],
     bookmarks:[{
        type:String
        
     }],
     likes:[{
        type:String
        
     }],
     tweets:[{
        type:String
        
     }],
     retweets:[{
        type:String
        
     }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;