import React from "react";
import Avatar from "./images/avatar.png";
import "./Home.css";
import Links from "./Links"
function Home() {
  return (
    <main className="home" id="home">
<section>
        <h1>
          Hello! My name is <strong>Andrew</strong>
        </h1>
        <p>
          I am a Junior Web developer who aims to make clean functional Web apps
          with a focus on good UI/UX. Always looking to learn about new
          technologies, libraries and frameworks to grow as a developer On the
          hunt for a Junior role.
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
