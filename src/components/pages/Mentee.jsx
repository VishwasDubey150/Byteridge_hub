import React from "react";
import './Mentee.css'; 
function Mentee() {
  return (
    <div  className ="main">
      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ border: "1px solid #007bff", padding: "10px", borderRadius: "8px", width: "300px" }}>
          <h3>Project Mentee</h3>
          <button style={{ background: "#007bff", color: "#fff", border: "none", padding: "5px 10px", borderRadius: "5px", cursor: "pointer" }}>
            + Add Mentee
          </button>
          <div style={{ marginTop: "10px" }}>
            <p>John Doe - Software Engineer</p>
            <button style={{ background: "transparent", color: "red", border: "1px solid red", padding: "5px", borderRadius: "5px", cursor: "pointer" }}>
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mentee;
