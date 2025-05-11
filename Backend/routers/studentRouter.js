import express from "express";
import Student from "../Models/student.js";
import {getStudent, addStudent} from "../controllers/studentController.js";

const studentRouter = express.Router()

studentRouter.get("/", getStudent);
studentRouter.post("/", addStudent);


export default studentRouter;