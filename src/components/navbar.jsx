import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <div>
        <ul className="ul">
          <li>
            <Link to="/mentors">MY MENTORS</Link>
          </li>
          <li>
            <Link to="/mentees">MY MENTEES</Link>
          </li>
        </ul>
      </div>
      <div className="btns"> 
        
        <button className="year"> FY 24-25</button>
        <button className="q1">Q3</button>
        <button className="r_mentors">Retain Mentors</button>
      </div>
    </nav>
  );
}

export default Navbar;
