// components/GetStudents.js
import React, { useEffect, useState } from "react";
import axios from "axios";

function GetStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5001/students")
      .then((res) => setStudents(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>All Students 📋</h2>
      {students.map((student) => (
        <div key={student._id}>
          <p><strong>{student.name}</strong> | Age: {student.age} | Email: {student.email}</p>
        </div>
      ))}
    </div>
  );
}

export default GetStudents;
