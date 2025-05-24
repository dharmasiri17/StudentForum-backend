import express from "express";
import {createUser, getUser} from "../controllers/userController.js";
import { get } from "mongoose";

const userRouter = express.Router();

userRouter.post("/", createUser);
userRouter.get("/", getUser);

export default userRouter;

