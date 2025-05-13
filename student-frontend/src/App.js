// App.js
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentForm from "./components/studentForm";
import SuccessPage from "./components/successPage";
import HomePage from "./components/homePage.js";  // ⭐
import GetStudents from "./components/getStudents.js";  // ⭐
import UpdateStudent from "./components/updateStudent.js";  // Optional
import DeleteStudent from "./components/deleteStudent.js";  // Optional
import bg from "./assets/main.jpg";


function App() {
  return (
    <Router>
      <div className="App">
        <div className="left">
          <div className="title">
            <h1>Student Management System</h1>
          </div>
          <img className="bgimage" src={bg} alt="Background" />

        </div>
        <div class="right">
          <Routes>
            <Route path="/" element={<HomePage />} />  {/* ⭐ Home */}
            <Route path="/add" element={<StudentForm />} />  {/* ⭐ Add */}
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/students" element={<GetStudents />} />  {/* ⭐ Get */}
            <Route path="/update" element={<UpdateStudent />} />  {/* Optional Update */}
            <Route path="/delete" element={<DeleteStudent />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;
