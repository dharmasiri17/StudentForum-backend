import express from "express";
import mongoose from "mongoose";    
import Student from "./Models/student.js";
import studentRouter from "./routers/studentRouter.js";


let app = express();

app.use(express.json());

let connectionString = "mongodb+srv://chathura101:chathura101@cluster-0.yltf4rs.mongodb.net/test1?retryWrites=true&w=majority&appName=Cluster-0";

mongoose.connect(connectionString).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log("Error connecting to MongoDB", err);
});

app.use("/students",studentRouter)

app.listen(5001,
    () => {
        console.log("Server is running on port 5001 b");
    }
);


