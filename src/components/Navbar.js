import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import Reorder from "@material-ui/icons/Reorder";
// import Reorder from '@m'

function Navbar() {
  return (
    <div className="navbar">
      <div className="toggleButton">
        <button>
          <Reorder />
        </button>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
      </div>
    </div>
  );
}

export default Navbar;
