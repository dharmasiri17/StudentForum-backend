// components/HomePage.js
import React from "react";
import { useNavigate } from "react-router-dom";  // ⭐

function HomePage() {
  const navigate = useNavigate();  // ⭐

  return (
    <div>
      <h2>Choose your option</h2>
      <button onClick={() => navigate("/add")}>Add Student</button> {/* ⭐ */}
      <button onClick={() => navigate("/students")}>Get Students</button> {/* ⭐ */}
      <button onClick={() => navigate("/update")}>Update Student</button> {/* ⭐ */}
      <button onClick={() => navigate("/delete")}>Delete Student</button> {/* ⭐ */}
    </div>
  );
}

export default HomePage;
