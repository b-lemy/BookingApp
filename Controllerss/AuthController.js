import User from "../models/UserModel.js";
import bcrypt from 'bcryptjs';
import jwt  from "jsonwebtoken";



export const register =  async (req , res , next ) => {
 try {
     const salt = bcrypt.genSaltSync(10);
     const hash = bcrypt.hashSync(req.body.password, salt);
     const  newUser =await new User({
         username:req.body.username,
         email:req.body.email,
         password:hash
     })
     await newUser.save()
     res.status(200).json("User has been created")
    }
    catch (err){
     next (err)
 }

}

export const login =  async (req , res , next ) => {
    try {
        const [user] = await User.findOne({username: req.body.username});

        if(!user) return(next);

        const isPassword = await bcrypt.compare(req.body.password , user.password)
        if(!isPassword) return(next);

        const token =jwt.sign({id:user._id, isAdmin:user.isAdmin},process.env.JWT)

        console.log("passed here")

        const {password ,isAdmin, ...other} = user._doc;


        res
            .cookie("access:token",token,{
            httpOnly:true,
            })
            .status(200).json({ ...other})
    }
    catch (err){
        next (err)
    }

}