import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <div>
        <ul className="ul">
          <li>
            <NavLink to="/mentors" className={({ isActive }) => (isActive ? "active-link" : "")}> MY MENTORS </NavLink>
          </li>
          <li>
            <NavLink to="/mentees" className={({ isActive }) => (isActive ? "active-link" : "")}>  MY MENTEES </NavLink>
          </li>
        </ul>
      </div>
      <div className="btns">
        <button className="year">FY 24-25</button>
        <button className="q1">Q3</button>
        <button className="r_mentors">Retain Mentors</button>
      </div>
    </nav>
  );
}

export default Navbar;
