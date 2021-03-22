const mongoose = require('mongoose');

const postSchema = new mongoose.Schema ({
    desc: {type:String},
    url: {type:String},
    userId: {type:String},
    avatar:{Type:String},
    name:{Type:String},
    displayname:{Type:String},
    likes:[{type: mongoose.Schema.Types.ObjectId, ref:'User'}],
    date: {
        type: Date,
        default: Date.now
    },
    comment:{Type:String}
});

const Post = mongoose.model('post', postSchema);

module.exports = Post;




//  example id : 60241b145c16af1528ca5eb8