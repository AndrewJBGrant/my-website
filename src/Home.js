import React from "react";
import Avatar from "./images/avatar.png";
import "./Home.css";
import CV from "./cv.pdf";
function Home() {
  return (
    <main className="home" id="home">
      <section class="padding-block-900">
        <div class="container">
          <div class="even-columns">
            <div class="flow">
              <h1 class="fs-primary-heading fw-bold">
                Hello! My name is <strong>Andrew</strong>
              </h1>
              <p>
                I am a Junior Web developer who aims to make clean functional
                Web apps with a focus on good UI/UX. Always looking to learn
                about new technologies, libraries and frameworks to grow as a
                developer On the hunt for a Junior Web-Dev role.
              </p>
              <a
                href="https://www.linkedin.com/in/andrewjbgrant/"
                target="blank"
              >
                <h2>linkedIn</h2>
              </a>
              <a href="https://github.com/AndrewJBGrant" target="blank">
                <h2>Github</h2>
              </a>

              <a href={CV} download="Andrew Grant CV">
                <h2>Download CV</h2>
              </a>
            </div>
            <div>
              <img className="el-4-avatar" src={Avatar} alt="Logo" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
