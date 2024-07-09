const mongoose=require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email :{
        type:String,
        required:true,
    },
});

//password ,username, hash and salt will already be provided by the library used 

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);

 