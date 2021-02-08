const mongoose = require('mongoose');

const userSchema = new mongoose.Schema ({
    userName: {type:String},
    Email: {type:String},
    Password: {type:String},
    img:{type:String}
});

const User = mongoose.model('User', userSchema);

module.exports = User;