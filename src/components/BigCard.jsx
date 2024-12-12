import React, { useState } from "react";
import "./BigCard.css";

const BigCard = ({title, mentors, onWithdraw, color}) => {
  const [selectedMentorId, setSelectedMentorId] = useState(null);

  const handleCardClick = (mentorId) => {
    setSelectedMentorId((prev) => (prev === mentorId ? null : mentorId));
  };

  const handleWithdrawClick = (mentorId) => {
    onWithdraw(mentorId);
    setSelectedMentorId(null);
  };

  return (
    <div className="big-card">
      <div className="topbar" style={{ backgroundColor: color }}>
        <h3 className="title">{title}</h3>
        <button className="req_btn">Request</button>
      </div>

      <div className="main">
      <p className="quater">Current Quater(Q3):</p>
      <div className="mentors-list">
        {mentors.length === 0 ? (
          <p className="no-mentors-message">No mentor assigned</p>)
          : (
          mentors.map((mentor) => (
            <div
              key={mentor.id} className={`mentor-card ${selectedMentorId === mentor.id ? "expanded" : ""}`}
              onClick={() => handleCardClick(mentor.id)}>
              <p className="m_name">{mentor.name}</p>
              <p className="m_role">{mentor.role}</p>
              {selectedMentorId === mentor.id && (
                <div className="withdraw-section">
                  <button className="withdraw-btn"onClick={() => handleWithdrawClick(mentor.id)}> Withdraw Request </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
    </div>
  );
};

export default BigCard;
