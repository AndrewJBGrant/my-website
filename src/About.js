import React from "react";
import { useState } from "react";
// import ReadMore from "./ReadMore";
import "./About.css";
import JSIcon from './icons/javascript.svg';
import RubyOnRails from './icons/rubyorails.svg';
import Css from './icons/CSS.svg';
import react from './icons/react.svg';
import html from './icons/html.svg';
import figma from './icons/figma.svg'


function About() {
  const [readMore, setReadMore] = useState(false);

  const togBtn = () => {
    setReadMore(!readMore);
  };

  return (
    <section className="about" id="about">
        <div className="background">
          <h1>Background</h1>


            <p>
              After working for over ten years as a Chef I felt the need for a
              change, a new path where I could continue to create, collaborate
              and learn,
               an environment where I build
              new skills while sharpening and refining old ones.
            </p>



            {readMore ? (

              <p>

                I took an interest in coding and enrolled in Le Wagon's Full stack Development Bootcamp, working with Ruby we learnt the key concepts and practices of Object-oriented programming,
                databases with SQL and Front-end with JavaScript, HTML and CSS.
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



     <aside>
<h3>Skills and tools </h3>

      <span> <h4>JavaScript</h4> <img src={ JSIcon } alt="JS Logo" /></span>
     <span> Ruby on Rails <img src={ RubyOnRails } alt="ROR Logo" /></span>
       <span><img src={ Css } alt="CSS-logo" /> CSS </span>
       <span><img src={ react } alt="React-logo" /> React </span>
       <span><img src={ html } alt="HTML-logo" /> HTML </span>
       <span><img src={ figma } alt="figma-logo" /> Figma </span>
    </aside>



    </section>

  );
}

export default About;
