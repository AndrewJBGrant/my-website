import React from "react";
import Avatar from "./images/avatar.png";
import "./Home.css";
import Links from "./Links"
function Home() {
  return (
    <main className="home" id="home">
      

<section>
        <h1>
          Hello, my name is Andrew
        </h1>
        <p>
        a Junior Web Developer passionate about creating clean, functional web applications with a strong focus on user-friendly design. <br></br> I'm committed to continuous growth and eager to work with new technologies, libraries, and frameworks as I pursue opportunities for a Junior role.
        </p>

          <Links />
</section>

        <aside>
          <img src={Avatar} alt="Logo" />
        </aside>

    </main>
  );
}

export default Home;
