import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import "../styles/Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();
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
      <p>Created by Matthew Kaufman | mkaufman385@gmail.com</p>
      <p>&copy; {currentYear} All Rights Reserved</p>
    </div>
  );
}

export default Footer;
