import React, { useState } from "react";
import "./MentorsContainer.css";

const MentorsContainer = ({ title, mentors, onWithdraw, color }) => {
  const [selectedMentorId, setSelectedMentorId] = useState(null);

  const handleCardClick = (mentorId) => {
    setSelectedMentorId((prev) => (prev === mentorId ? null : mentorId));
  };

  const handleWithdrawClick = (mentorId) => {
    onWithdraw(mentorId);
    setSelectedMentorId(null);
  };

  return (
    <div className="container-card">
      <div className="topbar" style={{ backgroundColor: color }}>
        <div className="left">
          <h3 className="title">{title}</h3>
          <button className="btn1">1</button>
        </div>

        <div className="right">
          <p className="p_txt">+</p>
          <p className="req_txt">Request</p>
        </div>
      </div>

      <div className="main">
        <p className="quater">Current Quarter(Q3):</p>
        <div className="mentors-list">

          {mentors.length === 0 ? (
            <p className="no-mentors-message">No mentor assigned</p>
          ) : (
            mentors.map((mentor) => (
              <div
                key={mentor.id}
                className={`mentor-card ${selectedMentorId === mentor.id ? "expanded" : "" }`}
                onClick={() => handleCardClick(mentor.id)}>
                  
                {mentor.isPending && (<p className="pending-approval">Pending Approval</p>)}
                <p className="m_name">{mentor.name}</p>
                <p className="m_role">{mentor.role}</p>

                {selectedMentorId === mentor.id && mentor.isPending && (<div className="withdraw-section">
                    <button className="withdraw-btn"onClick={() => handleWithdrawClick(mentor.id)}>
                      Withdraw Request
                    </button>
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

export default MentorsContainer;
