import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Mentor from "./components/pages/Mentor";
import Mentee from "./components/pages/Mentee";

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/mentors" element={<Mentor />} />
          <Route path="/mentees" element={<Mentee />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;