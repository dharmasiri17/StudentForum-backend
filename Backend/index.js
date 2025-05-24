import express from "express";
import mongoose from "mongoose";    
import cors from "cors"; // Import CORS
import studentRouter from "./routers/studentRouter.js";
import userRouter from "./routers/userRouter.js";


let app = express();
// Enable CORS for requests from frontend (http://localhost:3000)
app.use(cors({
    origin: "http://localhost:3000", // Allow frontend to make requests from this URL
}));

app.use(express.json());

let connectionString = "mongodb+srv://chathura101:chathura101@cluster-0.yltf4rs.mongodb.net/test1?retryWrites=true&w=majority&appName=Cluster-0";

mongoose.connect(connectionString).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log("Error connecting to MongoDB", err);
});

app.use("/students",studentRouter)
app.use("/users",userRouter)

app.listen(5001,
    () => {
        console.log("Server is running on port 5001");
    }
);


