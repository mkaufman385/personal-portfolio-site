import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  //USEEFFECT CLOSES HAMBURGER BUTTON AFTER MAKING A SELECTION
  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);
  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
        <a
          href="https://docs.google.com/document/d/1xRA3GpHsHAoKx_l4otWQoxojIcUTfv-CpruQANPiWYg/edit"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-link"
        >
          Resume
        </a>
      </div>
    </div>
  );
}

export default Navbar;
