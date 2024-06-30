import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import UserRouter from "./routes/users.js";
import TaskRouter from "./routes/tasks.js";
import {DBConnect} from "./Data/database.js";
import {config} from "dotenv";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";

const app = express();

config({path:"./Data/variable.env"});

DBConnect();
    
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/users",UserRouter);
app.use("/api/v1/tasks",TaskRouter);
app.use(errorMiddleware);



app.listen(process.env.PORT,()=>{
    console.log(`Server is working on port ${process.env.PORT} `);
})
