import React, { useState } from "react";
import BigCard from "../BigCard";
import "./Mentor.css";

const Mentors = () => {
  const [mentorsData, setMentorsData] = useState({
    projectMentors: [
      { id: 1, name: "Ankita Shrivastava", role: "Project Manager" },
      { id: 4, name: "Tanya Shrivastava", role: "Project Manager" },],
    skillMentors: [{ id: 2, name: "Rahul Kumar", role: "Skill Manager" }],
    domainMentors: [{ id: 3, name: "Raman Singh", role: "Domain Manager" }],
  });

  const handleWithdraw = (id) => {
    setMentorsData((prevData) => ({
      ...prevData,
      projectMentors: prevData.projectMentors.filter((mentor) => mentor.id !== id),
      skillMentors: prevData.skillMentors.filter((mentor) => mentor.id !== id),
      domainMentors: prevData.domainMentors.filter((mentor) => mentor.id !== id)
    }));
  };

  return (
    <div className="mentors-page">
      <BigCard
        title="Project Mentor"
        mentors={mentorsData.projectMentors}
        onWithdraw={handleWithdraw}
        color="#93d4ef"/>
      <BigCard
        title="Skill Mentor"
        mentors={mentorsData.skillMentors}
        onWithdraw={handleWithdraw}
        color="#C5E1A5"/>
      <BigCard
        title="Domain Mentor"
        mentors={mentorsData.domainMentors}
        onWithdraw={handleWithdraw}
        color="#D2B7FF"/>
    </div>
  );
};

export default Mentors;
