import Users from "../models/users.js";
import bcrypt from "bcrypt";
import { SendCookie } from "../utilities/features.js";
import ErrorHandler from "../middlewares/error.js";


export const getUserProfile =async (req,res)=>{
    res.status(200).json(req.user);
}


export const Logout=(req,res)=>{
  res.cookie("token","",{
    expires:new Date(Date.now()),
    sameSite:process.env.NODE_ENV==="development"?"lax":"none",
    secure: process.env.NODE_ENV==="development"?false:true,}).json({
    success:true,
    message:"Logout Succesfully",
  })
}



export const login=async(req,res,next)=>{
  try {
  const {email,password}=req.body;
  const user=await Users.findOne({email}).select("+password");
  
  if(!user)return next(new ErrorHandler("Invalid email or password",400));
  
  let IsCorrect=await bcrypt.compare(password,user.password);

  if(!IsCorrect)return next(new ErrorHandler("Invalid email or password",400));

  SendCookie(res,user,`Welcome Back ${user.name}`,201);
  } catch (error) {
    next(error);
    
  }
}






export const RegisterUser= async(req,res)=>{
  try {
  const {name,email,password}=req.body;
  let User= await Users.findOne({email});

  if(User)return next(new ErrorHandler("User already Registered",400));

  const HashedPassword= await bcrypt.hash(password,10);
   
  const user=await Users.create({name,email,password:HashedPassword })
   
  SendCookie(res,user,"Registered Succesfully",201);
  } catch (error) {
    next(error);
    
  }
}



