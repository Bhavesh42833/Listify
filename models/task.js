import mongoose from "mongoose";

const schema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type: String,
        required:true,
    },
    IsCompleted:{
        type :Boolean,
        default :false,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        pref:"user",
        required:true,
    },
    createdAt: {
        type:Date,
        default: Date.now,
    },
});
const Tasks = mongoose.model("task",schema);

export default Tasks;