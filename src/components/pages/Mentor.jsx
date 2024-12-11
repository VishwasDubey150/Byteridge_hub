import React from "react";
import './Mentee.css'; 

function Mentor() {
  return (

    <div className="main">

    <div>
      <div style={{ display: "flex", gap: "20px" }}>
        {/* Project Mentor */}
        <div style={{ border: "1px solid #007bff", padding: "10px", borderRadius: "8px", width: "300px" }}>
          <h3>Project Mentor</h3>
          <button style={{ background: "#007bff", color: "#fff", border: "none", padding: "5px 10px", borderRadius: "5px", cursor: "pointer" }}>
            + Request
          </button>
          <div style={{ marginTop: "10px" }}>
            <p style={{ color: "red", fontWeight: "bold" }}>Pending Approval</p>
            <p>Ujwal Parker - Project Manager</p>
            <button style={{ background: "transparent", color: "red", border: "1px solid red", padding: "5px", borderRadius: "5px", cursor: "pointer" }}>
              Withdraw Request
            </button>
          </div>
        </div>

        {/* Skill Mentor */}
        <div style={{ border: "1px solid #28a745", padding: "10px", borderRadius: "8px", width: "300px" }}>
          <h3>Skill Mentor</h3>
          <button style={{ background: "#28a745", color: "#fff", border: "none", padding: "5px 10px", borderRadius: "5px", cursor: "pointer" }}>
            + Request
          </button>
          <div style={{ marginTop: "10px" }}>
            <p>Ankita Shrivastava - Project Manager</p>
          </div>
        </div>

        {/* Domain Mentor */}
        <div style={{ border: "1px solid #6f42c1", padding: "10px", borderRadius: "8px", width: "300px" }}>
          <h3>Domain Mentor</h3>
          <button style={{ background: "#6f42c1", color: "#fff", border: "none", padding: "5px 10px", borderRadius: "5px", cursor: "pointer" }}>
            + Request
          </button>
          <div style={{ marginTop: "10px" }}>
            <p>Ankita Shrivastava - Project Manager</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Mentor;
