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
            <p>After working for over ten years as a Chef I felt the need for a change, I wanted a new path where I could continue to create, collaborate and to always be learning <br/>An environment where I could persistently be building new skills while sharping and refining old ones<br/><br/>
I took an interest in coding, with its vast and always changing world, the inspiring open source community and endless learning opportunities.<br/><br/>

I enrolled in Le Wagon's Web development bootcamp, Using Ruby we learnt the basics of programming before a dive into OOP, we then moved on to SQL and database structures then jumped into HTML , CSS and some JavaScript. We finished the course learning the Rails framework where we started to build bigger and more interactive apps before splitting into groups to complete two final projects

<br/><br/>Since Graduating I have been learning React, working on different projects and sharperning my eye for good design.



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
          <SiRubyonrails color="#DE6449" fontSize="4.2rem" />
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
