import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UpdateStudent() {
  const [student, setStudent] = useState({ id: "", name: "", age: "", email: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { id, name, age, email } = student;
      const res = await axios.put(`http://localhost:5001/students/${id}`, { name, age, email });
      alert("Student updated successfully!");
      navigate("/success", { state: { student } });
    } catch (err) {
      console.error("Update error:", err.response || err.message);
      alert("Failed to update student.");
    }
  };

  return (
    <div>
      <h2>Update Student 🔄</h2>
      <form onSubmit={handleUpdate}>
        <input name="id" placeholder="Student ID" value={student.id} onChange={handleChange} required /><br /><br />
        <input name="name" placeholder="New Name" value={student.name} onChange={handleChange} required /><br /><br />
        <input name="age" type="number" placeholder="New Age" value={student.age} onChange={handleChange} required /><br /><br />
        <input name="email" type="email" placeholder="New Email" value={student.email} onChange={handleChange} required /><br /><br />
        <button type="submit">Update Student</button>
      </form>
      <br />
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default UpdateStudent;
