import ErrorHandler from "../middlewares/error.js";
import Tasks from "../models/task.js";

export const CreateTask=async(req,res)=>{
   try {
    const {title,description}=req.body;
    await Tasks.create({
        title,description,user:req.user,
    })
    res.status(201).json({
        success:true,
        message:"Created Successfully",
        name:req.user.name
    })
    
   } catch (error) {
    next(error);
    
   }
}

export const GetMyTask=async(req,res)=>{
 try {
  const userid=req.user._id;
  const task= await Tasks.find({user:userid});
  
   if(!task)return next(new ErrorHandler("Task not found",404));
 
   res.status(200).json({
     success:true,
     task
   })
 } catch (error) {
  next(error);
 }
}

export const UpdateTask=async(req,res,next)=>{
    try {
    const task=await Tasks.findById(req.params.id);
    
    if(!task)return next(new ErrorHandler("Task not found",404));
    
    task.IsCompleted=!task.IsCompleted;
    await task.save();
    
    res.status(200).json({
       success:true,
       message:"updated"
     })
    } catch (error) {
      next(error);
    }
   }

   export const DeleteTask=async(req,res,next)=>{
    try {
    const task=await Tasks.findById(req.params.id);
    
    if(!task) return next(new ErrorHandler("Task not found",404));
    
    await task.deleteOne();

    res.status(200).json({
       success:true,
       message:"Deleted",
     })
    } catch (error) {
      next(error);
    }
   }