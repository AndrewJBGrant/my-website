import React from "react";
import Avatar from "./images/avatar.png";
import "./Home.css";
import Links from "./Links"

// const sectionOne = document.querySelector("section");

// const options = {
//   root: null, // This setting equals default of your view port
//   threshold: 0,
//   rootMargin: "-50px",

// };

// const observer = new IntersectionObserver(function(entries,
//  observer) {
// entries.forEach(entry => {
//   if(!entry.isIntersecting) {
//     console.log("finished");
//     return;
//   }
// // console.log(entry.target);
// console.log(entry.isIntersecting);


// });
//  }, options);


//  observer.observe(sectionOne)

//console.log("hello");

function Home() {
  return (

    <>

<header></header>
    <main className="home" id="home">

        <section>
          <h1>
            Hello, my name is <span className="first-name">Andrew</span>
          </h1>
          <p>
            Junior Developer passionate about creating clean, functional web apps with a strong focus on user-friendly design. <br></br>Committed to continuous growth and eager to work with new technologies, libraries, and frameworks as I pursue opportunities for a Junior role.
          </p>

          <Links />
        </section>

        <aside>
          <img src={Avatar} alt="Logo" />
        </aside>

      </main></>
  );
}

export default Home;
