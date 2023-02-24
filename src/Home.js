import React from "react";
import logo from "./logo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./Home.css";
function Home() {
  return (
    <div className="home" id="home">
      <section>
        <div className="main">
          <span className="span-1">Hello! my name is</span>
          <span className="span-2"> Andrew</span>

          <p className="about-me">
            I am a front-end developer based in Berlin <br/>
            I like to make clean and functional
          </p>
          <div className="links">
            <a href="https://www.linkedin.com/in/andrewjbgrant/" target="blank">
              <h1>
                <FaLinkedin color="#DE6449" fontSize="0.8em" />
              </h1>
            </a>

            <a href="https://github.com/AndrewJBGrant" target="blank">
              <h1 className="github">
                {" "}
                <FaGithub color="#DE6449" fontSize="0.8em"/>{" "}
              </h1>
            </a>
          </div>
        </div>
        <img className="avatar" src={logo} alt="Logo" />
      </section>
    </div>
  );
}

export default Home;
