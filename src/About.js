import React from "react";
import { useState } from "react";
// import ReadMore from "./ReadMore";
import { FaGithub, FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { IoLogoJavascript, IoTerminal } from "react-icons/io5";
import { SiRubyonrails } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";
import "./About.css";

import { links } from './data'

function About() {
  const [readMore, setReadMore] = useState(false);

  const togBtn = () => {
    setReadMore(!readMore);
  };

  return (
    <div className="about" id="about">
      <div className="about-flex">
        <div className="background">
          <h1>Background</h1>
          <div className="paragragh">
            {/* <ReadMore> */}
            <p className="intro">
              After working for over ten years as a Chef I felt the need for a
              change, a new path where I could continue to create, collaborate
              and learn,
               an environment where I build
              new skills while sharpening and refining old ones.
            </p>
            {/* <button onClick={() => setReadMore(true)}>{"...read More"}</button> */}


            {readMore ? (

              <p className="show-more">

                I took an interest in coding and enrolled in Le Wagon's Full stack Development Bootcamp, working with Ruby we learnt the key concepts and practices of Object-oriented programming, databases with SQL and Front-end with JavaScript, HTML and CSS.
                <br/><br/>Building on those skills we moved on to the Rails framework
                and in teams of three we designed, built and deployed two functioning Web applications.


                <br/><br/>Since Graduating I have been
                working mainly with React
                 and TypeScript to build projects. Utilizing
 testing to make my code more robust
                 and reading up on good web design principles.

              </p>
            ) : null}
            <button className="read-more-button" onClick={togBtn}>
              {readMore ? "Read Less..." : "...Read More"}
            </button>

            {/* </ReadMore> */}
          </div>
        </div>

        <h3 className="skills-heading">Skills and Tools</h3>
        <div className="skills">
          <div>
            <IoLogoJavascript className="icons" />
            <p>JavaScript</p>
          </div>
          <div>
            <FaReact className="icons" />
            <p>React</p>
          </div>
          <div>
            <FaCss3 className="icons" />
            <p>CSS</p>
          </div>
          <div>
            <FaHtml5 className="icons" />
            <p>HTML</p>
          </div>
          <div>
            <FaGithub className="icons" />
            <p>Github</p>
          </div>
          <div>
            <SiRubyonrails className="icons" color="#DE6449" fontSize="4.2rem" />
            <p>Ruby on Rails</p>
          </div>
          <div>
            <IoTerminal className="icons" />
            <p>Terminal/Git</p>
          </div>
          <div>
            <AiOutlineConsoleSql className="icons" />
            <p>SQL</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
