import React, { useState } from "react";
import MentorsContainer from "../MentorsContainer";
import "./Mentor.css";

const Mentors = () => {
  const [mentorsData, setMentorsData] = useState({
    projectMentors: [
      { id: 1, name: "Ankita Shrivastava", role: "Project Manager", isPending: true },
      { id: 4, name: "Tanya Shrivastava", role: "Project Manager", isPending: false },
    ],
    skillMentors: [
      { id: 2, name: "Rahul Kumar", role: "Skill Manager", isPending: false },
    ],
    domainMentors: [
      { id: 3, name: "Raman Singh", role: "Domain Manager", isPending: true },
    ],
  });

  const handleWithdraw = (id) => {
    setMentorsData((prevData) => ({
      ...prevData,
      projectMentors: prevData.projectMentors.filter(
        (mentor) => mentor.id !== id
      ),
      skillMentors: prevData.skillMentors.filter((mentor) => mentor.id !== id),
      domainMentors: prevData.domainMentors.filter((mentor) => mentor.id !== id),
    }));
  };

  return (
    <div className="mentors-page">
      <MentorsContainer
        title="Project Mentor"
        mentors={mentorsData.projectMentors}
        onWithdraw={handleWithdraw}
        color="#FFCCCC" 
      />
      <MentorsContainer
        title="Skill Mentor"
        mentors={mentorsData.skillMentors}
        onWithdraw={handleWithdraw}
        color="#CCFFCC" 
      />
      <MentorsContainer
        title="Domain Mentor"
        mentors={mentorsData.domainMentors}
        onWithdraw={handleWithdraw}
        color="#CCCCFF" 
      />
    </div>
  );
};

export default Mentors;
