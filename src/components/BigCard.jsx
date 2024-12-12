  import React, { useState } from "react";
  import "./BigCard.css"

  const BigCard = ({ title, mentors, onWithdraw }) => {
    const [selectedMentor, setSelectedMentor] = useState(null);

    const handleCardClick = (mentor) => {
      setSelectedMentor(mentor); 
    };

    const handleWithdrawClick = () => {
      if (selectedMentor) {
        onWithdraw(selectedMentor.id); 
        setSelectedMentor(null);
      }
    };
    
    return (
      <div className="big-card">
      <div className="topbar"> 
        <h2>{title}</h2>
        <button className="req_btn">Request</button>
      </div>
        <div className="mentors-list">
          
          {mentors.length === 0 ? (
            <p className="no-mentors-message">No mentor assigned</p>
          ) : (
            mentors.map((mentor) => (
              <div
                key={mentor.id}
                className={`mentor-card ${
                  selectedMentor?.id === mentor.id ? "selected" : ""}`}
                onClick={() => handleCardClick(mentor)}>
                <p>{mentor.name}</p>
                <p>{mentor.role}</p>
              </div>
            ))
          )}
        </div>
        {selectedMentor && (
          <div className="withdraw-request">
            <p>Do you want to withdraw the request for {selectedMentor.name}?</p>
            <button onClick={handleWithdrawClick}>Withdraw Request</button>
            <button onClick={() => setSelectedMentor(null)}>Cancel</button>
          </div>
        )}
      </div>
    );
  };

  export default BigCard;
