import React from "react";
import { FaGithub, FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { IoLogoJavascript, IoTerminal } from "react-icons/io5";
import { SiRubyonrails } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";
import "./About.css";

function About() {
  return (
    <div className="about" id="about">
      <div className="about-flex">
        <div className="background">
          <h1>Background</h1>
          <div className="paragragh">
            <p>
              Having spent over ten years working as a chef, I attended Le
              Wagon's 24 week intensive web Dev bootcamp and it was the
              Javascript I am now looking for A Junior role Since graduating
              from le wagon I have been learning React I take from my time
              Problem solving skills, focus and a need
              {/* My chef career presented me so many great opportunities in
              different environments with a diverse group of people, teaching me
              the importance of collaboration, good communication and the
              balance of being adaptable and open minded but also knowing when
              to think critically and make decisions. passing those skills on to
              others taught me patience and how to provide constructive feedback */}
            </p>
          </div>
        </div>

        <h3 className="skills-heading">Skills and Tools</h3>
        <div className="skills">
          <div>
            <FaGithub color="#DE6449" fontSize="4rem" />
            <p>Github</p>
          </div>
          <div>
          <FaHtml5 color="#DE6449" fontSize="4rem" />
          <p>HTML</p>
          </div>
          <div>
          <FaCss3 color="#DE6449" fontSize="4rem" />
          <p>CSS</p>
          </div>
          <div>
          <IoLogoJavascript color="#DE6449" fontSize="4rem" />
          <p>JavaScript</p>
          </div>
          <div>
          <FaReact color="#DE6449" fontSize="4rem" />
          <p>React</p>
          </div>
          <div>
          <SiRubyonrails color="#DE6449" fontSize="4rem" />
          <p>Ruby on Rails</p>
          </div>
           <div>
          <IoTerminal color="#DE6449" fontSize="4rem" />
          <p>Terminal</p>
          </div>
          <div>
          <AiOutlineConsoleSql color="#DE6449" fontSize="4rem" />
          <p>SQL</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
