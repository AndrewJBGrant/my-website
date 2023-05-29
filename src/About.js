import React from "react";
import { useState } from "react";
// import ReadMore from "./ReadMore";
import "./About.css";


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


    <div className="icon-div">
      <span className="icons-text">React</span>
    </div>
     <div className="icon-div">
      <span className="icons-text">JavaScript</span>
    </div>
    </div>



    </div>

  );
}

export default About;
