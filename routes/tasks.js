import express from "express";
import { Authentication } from "../middlewares/auth.js";
import { CreateTask, DeleteTask, GetMyTask,UpdateTask ,FilterMyTask} from "../controllers/tasks.js";

const TaskRouter=express.Router();

TaskRouter.post("/create",Authentication,CreateTask);
TaskRouter.get("/mytask",Authentication,GetMyTask);
TaskRouter.get("/filter",Authentication,FilterMyTask);
TaskRouter.route("/:id").put(Authentication,UpdateTask).delete(Authentication,DeleteTask);

export default TaskRouter;