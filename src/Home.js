import React from "react";
import logo from "./logo.png";
// import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./Home.css";
import CV from "./cv.pdf";
function Home() {
  return (
    <div className="home" id="home">
      <section>
        <div className="main">
          <span className="span-1">Hello! My name is</span>
          <span className="span-2"> Andrew</span>

          <p className="about-me">
            I am a front-end developer based in Berlin <br />
            I like to make clean and functional code <br /> Always looking for
            oppurtunities to grow and test my skills <br />
            Looking for a Junior Front-end role
            I like to make clean and functional code <br /> Always looking for
            oppurtunities to grow and test my skills <br />
            Looking for a Junior Front-end role
          </p>
          <div className="links">
            
            <a href="https://github.com/AndrewJBGrant" target="blank">
              <h3>
                linkedIn
                {/* <FaGithub color="#DE6449" fontSize="0.8em" />{" "} */}
              </h3>
            </a>
            <a href="https://www.linkedin.com/in/andrewjbgrant/" target="blank">
              <h3>
                Github
                {/* <FaLinkedin color="#DE6449" fontSize="0.8em" /> */}
              </h3>
            </a>

            <a href={CV} download="Andrew Grant CV">
              <h3>Download CV</h3>
            </a>
          </div>
        </div>
        <img className="avatar" src={logo} alt="Logo" />
      </section>
    </div>
  );
}

export default Home;
