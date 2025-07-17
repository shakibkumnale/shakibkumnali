import mongoose from "mongoose";

const user =new mongoose.Schema({
    name:String,
    jobTitle:String,
    follow:Boolean,
    discribtion:String,
    task:Number,
    review:Number,


    
})
 const User = mongoose.model('User' , user)
 export default User