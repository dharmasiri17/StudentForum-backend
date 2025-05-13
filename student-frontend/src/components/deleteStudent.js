import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DeleteStudent() {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleDeleteById = async () => {
    try {
      await axios.delete(`http://localhost:5001/students/${id}`);
      alert("Student deleted by ID.");
      navigate("/success", { state: { student: { id } } });
    } catch (err) {
      console.error("Delete by ID failed:", err.response || err.message);
      alert("Failed to delete by ID.");
    }
  };

  const handleDeleteByEmail = async () => {
    try {
      await axios.delete(`http://localhost:5001/students/email/${email}`);
      alert("Student deleted by Email.");
      navigate("/success", { state: { student: { email } } });
    } catch (err) {
      console.error("Delete by Email failed:", err.response || err.message);
      alert("Failed to delete by Email.");
    }
  };

  return (
    <div>
      <h2>Delete Student ❌</h2>
      <input placeholder="Student ID" value={id} onChange={(e) => setId(e.target.value)} /><br />
      <button onClick={handleDeleteById}>Delete by ID</button><br /><br />

      <input placeholder="Student Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
      <button onClick={handleDeleteByEmail}>Delete by Email</button><br /><br />

      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default DeleteStudent;
