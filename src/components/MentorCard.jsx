import React from "react";
import "./MentorCard.css";

const MentorCard = ({ mentor, onWithdraw }) => {
  return (
    <div className="mentor-card">
      <p>{mentor.name}</p>
      <p>{mentor.role}</p>
      <button className="withdraw-btn" onClick={() => onWithdraw(mentor.id)}>
        Withdraw Request
      </button>
    </div>
  );
};

export default MentorCard;
