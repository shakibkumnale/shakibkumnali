// import { users } from "../constant/constant.js";
import User from "../model/users.js";



const fetch = async(req, res)=>{

    const users= await User.find({});
    console.log(users)
    res.status(200).json(

        {mesaage:"ok", data:users}
    )

}
export {fetch}