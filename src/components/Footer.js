import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import GithubIcon from "@material-ui/icons/GithubIcon";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          href="https://www.linkedin.com/in/mkaufman385webdev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div>
      <p>&copy; 2024 Matthew Kaufman</p>
    </div>
  );
}

export default Footer;
