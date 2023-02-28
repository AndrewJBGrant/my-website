import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about" id="about">
      <div className="about-flex">
        <div className="background">
          <h1>Background</h1>
          <div className="paragragh">
            <p>
Having spent over ten years working as a chef,
I attended Le Wagon's 24 week intensive web Dev bootcamp and


it was the Javascript

I am now looking for A Junior role
I take from my time  Problem solving skills, focus and a need



              {/* My chef career presented me so many great opportunities in
              different environments with a diverse group of people, teaching me
              the importance of collaboration, good communication and the
              balance of being adaptable and open minded but also knowing when
              to think critically and make decisions. passing those skills on to
              others taught me patience and how to provide constructive feedback */}
            </p>
          </div>
        </div>



        <div className="skills">
          <h3>Skills</h3>
          <p>What I love most about Web
            Since graduating from le wagon I have been learning React </p>
          <p> HTML CSS JavaScript React Stimulus Ruby on Rails </p>



        </div>

      </div>


    </div>
  );
}

export default About;
