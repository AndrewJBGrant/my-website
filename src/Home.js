import React from "react";
import logo from "./logo.png";
import linkedin from "./linkedin.png";
import github from "./github-60.png";
import "./Home.css";
function Home() {
  return (
    <div className="home" id="home">
      <section>
        <div className="main">
          <span className="span-1">Hello! my name is </span>
          <span className="span-2"> Andrew</span>

          <p className="about-me">
            I am a frontend developer making the jump from a career as a chef I
            am a life long learner, always looking to learn and challenge myself
            I am a frontend developer making the jump from a career as a chef I
            am a life long learner, always looking to learn and challenge myself
            I am a frontend developer making the jump from a career as a chef I
            am a life long learner, always looking to learn and challenge myself
          </p>
          <div className="links">
            <a href="https://www.linkedin.com/in/andrewjbgrant/" target="blank">
              <img className="logo-link" src={linkedin} alt="Logo" />{" "}
            </a>

            <a href="https://github.com/AndrewJBGrant" target="blank">
              <img className="logo-link" src={github} alt="Logo" />{" "}
            </a>
          </div>
        </div>
        <img className="avatar" src={logo} alt="Logo" />
      </section>
    </div>
  );
}

export default Home;
