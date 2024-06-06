/* eslint-disable no-undef */
const mongoose =require ('mongoose');
// const {Schema} = mongoose;

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});
const User=mongoose.model('user',UserSchema);
User.createIndexes();
 
module.exports=User