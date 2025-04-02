import mongoose from "mongoose";

const schema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type: String,
        unique: true,
        required:true,
    },
    password:{
        type :String,
        select :false,
        required:true,
    },
    avatar:
    {  public_id: String,
       url:String,
    },
    createdAt: {
        type:Date,
        default: Date.now,
    }
});
const Users = mongoose.model("user",schema);

export default Users;