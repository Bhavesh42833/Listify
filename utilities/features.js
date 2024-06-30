import jwt from "jsonwebtoken";

export const  SendCookie=(res,Users,message,StatusCode)=>{
const token =jwt.sign({_id: Users._id},process.env.SECRET_KEY);
  
res.status(StatusCode).cookie("token",token,{
     httpOnly:true,
     maxAge:15*60*60*1000,
     sameSite:process.env.NODE_ENV==="development"?"lax":"none",
     secure: process.env.NODE_ENV==="development"?false:true,
   }).json({
     success:true,
     message,
   })
}