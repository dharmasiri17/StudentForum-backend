import express from "express";
import { getStudent, addStudent, deleteStudent, updateStudent } from "../controllers/studentController.js";



const studentRouter = express.Router()

studentRouter.get("/", getStudent);
studentRouter.post("/", addStudent);
studentRouter.delete("/:id", deleteStudent);
studentRouter.put("/:id", updateStudent);


export default studentRouter;