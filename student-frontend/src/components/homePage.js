import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h2 className="home-title">Choose your option</h2>
      <button className="home-button" onClick={() => navigate("/add")}>Add Student</button>
      <button className="home-button" onClick={() => navigate("/students")}>Get Students</button>
      <button className="home-button" onClick={() => navigate("/update")}>Update Student</button>
      <button className="home-button" onClick={() => navigate("/delete")}>Delete Student</button>
    </div>
  );
}

export default HomePage;
