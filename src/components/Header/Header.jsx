import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <a href="/" className="logo">
        Neal Anand
      </a>
      <nav>
        <Link to="AboutMe">About Me</Link>

        <Link to="Skills">Skills</Link>

        <Link to="Projects">Projects</Link>

        <a href="./assets/resume.pdf" target="_blank">
          Resume
        </a>
      </nav>
    </header>
  );
};

export default Header;
