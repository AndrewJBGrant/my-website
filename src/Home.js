import React from "react";
import Avatar from "./images/avatar.png";
import "./Home.css";
import CV from "./cv.pdf";
function Home() {
  return (
    <div className="home" id="home">
      <section>
        <div className="main">
          <div className="text-left">
          <div className="el-1-header">
            <span className="span-1">Hello! My name is</span>
            <span className="span-2"> Andrew</span>
          </div>
          <p className="el-2-about-me">
           I am a Front-End developer
           who aims to make clean functional Web apps with a focus on good UI/UX.<br/><br/>
           Recently I have been working with React, TypeScript and Ruby on Rails.<br/><br/>
           Always looking to learn about new technologies, libraries and frameworks to grow as a developer.
            <br/><br/>On the hunt for a Junior Front-End role.
          </p>
          <div className="el-3-links">
            <a href="https://www.linkedin.com/in/andrewjbgrant/" target="blank">
              <h3>
                linkedIn
                {/* <FaGithub color="#DE6449" fontSize="0.8em" />{" "} */}
              </h3>
            </a>
            <a href="https://github.com/AndrewJBGrant" target="blank">
              <h3>
                Github
              </h3>
            </a>

            <a href={CV} download="Andrew Grant CV">
              <h3>Download CV</h3>
            </a>
          </div>
          </div>
          <img className="el-4-avatar" src={Avatar} alt="Logo" />
        </div>
      </section>
    </div>
  );
}

export default Home;
