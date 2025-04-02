import ErrorHandler from "../middlewares/error.js";
import Tasks from "../models/task.js";

export const CreateTask=async(req,res,next)=>{
   try {
    const {title,description,deadline,time_tag}=req.body;
    await Tasks.create({
        title,description,deadline,time_tag,user:req.user,
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

export const GetMyTask=async(req,res,next)=>{
 try {
  const userid=req.user._id;
  const task= await Tasks.find({user:userid}).sort({deadline:1});
  
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

   export const FilterMyTask = async (req, res, next) => {
    try {
      console.log("Received Query Params:", req.query); // Debugging
  
      const userId = req.user._id;
      const { title, deadline, time_tag } = req.query;
  
      let filter = { user: userId, IsCompleted: false };
  
      if (title) {
        filter.title = { $regex: title, $options: "i" }; // Case-insensitive search
      }
      
      if (deadline) {
        const parsedDeadline = new Date(deadline);
        if (!isNaN(parsedDeadline.getTime())) {
          filter.deadline = parsedDeadline; // Only set if it's a valid date
        }
      }
  
      if (time_tag) {
        filter.time_tag = time_tag;
      }
       console.log(filter);
      const tasks = await Tasks.find(filter).sort({ deadline: 1 });
  
      res.status(200).json({
        success: true,
        tasks,
      });
    } catch (error) {
      next(error);
    }
  };
  