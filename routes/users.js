import express from "express";
import { Logout, RegisterUser ,getUserProfile,login} from "../controllers/users.js";
import { Authentication } from "../middlewares/auth.js";

const router=express.Router();


router.get("/me",Authentication,getUserProfile);

router.post("/register", RegisterUser)


router.post("/login",login);
router.get("/logout",Logout);
export default router;

