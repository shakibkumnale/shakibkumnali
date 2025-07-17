import mongoose from "mongoose";

const user = new mongoose.Schema({
    name: { type: String, required: true },
    jobTitle: { type: String, required: true },
    follow: { type: Boolean, default: false },
    description: { type: String, required: true },
    tasks: { type: Number, required: true },
    reviews: { type: String, required: true },
    image: { type: String, required: true }
})
 const User =new mongoose.model('User',user)
 export default User