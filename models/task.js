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
    deadline:{
        type:Date,
        default: Date.now,
    },
    time_tag:{
        type:String,
        enum:["morning","evening","night"],
        required:true,
    },
});
const Tasks = mongoose.model("task",schema);

export default Tasks;