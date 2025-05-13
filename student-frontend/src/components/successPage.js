import React from "react";
import { useLocation } from "react-router-dom";  // Import useLocation


function SuccessPage() {
  const location = useLocation();  // **Highlight**: Using useLocation to get the state
  const { student } = location.state || {};  // **Highlight**: Destructuring student from the state

  return (
    <div>
      <h2>Student Added Successfully! 🎉</h2>
      {student ? (  // **Highlight**: Conditionally rendering student details
        <>
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Age:</strong> {student.age}</p>
          <p><strong>Email:</strong> {student.email}</p>
        </>
      ) : (
        <p>Failed to retrieve student details.</p>
      )}
      <button onClick={() => window.location.href = "/"}>Back to Home</button>  {/* **Highlight**: Button to navigate back to home */} 
    </div>
  );
}

export default SuccessPage;