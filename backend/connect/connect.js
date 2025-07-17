import mongoose from 'mongoose'
const connect=async()=>{
    try{
        await mongoose.connect(process.env.URLDB)
        console.log("connected");

    }catch(err){
        console.log(err);
        
    }
}
export default connect