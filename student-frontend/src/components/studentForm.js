import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";  // Change to useNavigate

function StudentForm() {
  const [student, setStudent] = useState({
    name: "",
    age: "",
    email: "",
  });

  const navigate = useNavigate();  // Use useNavigate instead of useHistory

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5001/students", student);
      console.log(response);  // Log the response from the backend
      alert("Student added successfully!");
      setStudent({ name: "", age: "", email: "" }); // Clear form
      navigate("/success", { state: { student } });  // Use navigate to redirect
    } catch (error) {
      console.error("Error adding student:", error.response || error.message);  // Log detailed error
      alert("Failed to add student.");
    }
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Add Student 🧑‍🎓</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={student.name}
          onChange={handleChange}
          required
        /><br /><br />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={student.age}
          onChange={handleChange}
          required
        /><br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={student.email}
          onChange={handleChange}
          required
        /><br /><br />

        <button type="submit">Add Student</button>
      </form>

    <button onClick={() => navigate("/")}>Back to Home</button> {/* ✅ Now properly placed */}
    </div>
  );
}

export default StudentForm;
