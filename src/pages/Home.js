import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h3>Hi, My name is Matthew</h3>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating</p>
          <LinkedInIcon />
          <EmailIcon />
          <GitHubIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span></span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span></span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span></span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
