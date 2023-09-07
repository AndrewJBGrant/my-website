import { useState } from "react";
// import ReadMore from "./ReadMore";
import "./About.css";
import Skills from "./Skills";

function About() {
  const [readMore, setReadMore] = useState(false);

  const togBtn = () => {
    setReadMore(!readMore);
  };

  return (
    <div className="about" id="about">
      <main>
        <h1>Background</h1>

        <p>
          After more than a decade as a successful chef,
          I sought a fresh challenge that would leverage my culinary expertise while allowing me to create,
          collaborate, and continuously learn.
        </p>

        {readMore ? (
          <p>
            I took an interest in coding and enrolled in Le Wagon's Full stack
            Development Bootcamp, working with Ruby we learnt the key concepts
            and practices of Object-oriented programming, databases with SQL and
            Front-end with JavaScript, HTML and CSS.
            <br />
            <br />
            Building on those skills we moved on to the Rails framework and in
            teams of three we designed, built and deployed two functioning Web
            applications.
            <br />
            <br />
            Since Graduating I have been working mainly with React and
            TypeScript to build projects. Utilizing testing to make my code more
            robust and reading up on good web design principles.
          </p>
        ) : null}
        <button className="read-more-button" onClick={togBtn}>
          {readMore ? "Read Less..." : "...Read More"}
        </button>

        {/* </ReadMore> */}
      </main>
      <aside className="sticky-skills">
        <h3>Skills and tools </h3>
        <Skills />
      </aside>
    </div>
  );
}

export default About;
