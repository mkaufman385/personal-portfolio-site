import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import profileImage from "../assets (images)/Updated-LinkedIn_Photo-white-background.png";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as ScrollLink } from "react-scroll";

import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <div className="profile-container">
          <div className="profile-image">
            <img src={profileImage} alt="Profile of Matthew" />
            <div className="tooltip">
              <b>
                Welcome to my Web Development Portfolio website! Please explore
                my projects, skills, and experience.
              </b>
            </div>
          </div>
        </div>
        <h2 className="name">Hi, My name is Matthew Kaufman</h2>
        <div className="prompt">
          <p>
            Explore my portfolio to see how my Full Stack Web Development skills
            can drive your projects forward. I’m ready to bring my expertise and
            passion to your team as a software engineer. Let’s create something
            great together!
          </p>
          <a
            href="https://www.linkedin.com/in/mkaufman385webdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>

          <a
            href="https://github.com/mkaufman385"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
        </div>
        <ScrollLink to="skills" smooth={true} duration={500}>
          <ExpandMoreIcon className="skills-down-arrow" />
        </ScrollLink>
      </div>
      <div className="skills" id="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              React.js, JavaScript, Redux, Hooks, Context API, Jest, Cypress,
              Yup, Axios, HTML, CSS
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>Auth0, Postman, Heroku, Netlify, Vercel</span>
          </li>
          <li className="item">
            <h2>Additional</h2>
            <span>
              SQLite, GitHub, Visual Studio Code, Architecture, Testing,
              Debugging, Deployment
            </span>
          </li>
        </ol>
      </div>
      <ScrollLink to="footer" smooth={true} duration={500}>
        <div className="footer-down-arrow-container">
          <ExpandMoreIcon className="footer-down-arrow" id="footer-arrow" />
        </div>
      </ScrollLink>
    </div>
  );
}

export default Home;
