import React from "react";
import Card from "./Card";
import "./Projects.css";
// import logo from "./images/logo.png";
// import SweetPaw from "./images/Sweet-paw.png";
// import Book1 from "./images/bookbuddygood.jpg";
import Video from "./images/video.mp4";
// import Book2 from "./images/book-buddy2.jpg";

function Projects() {
  return (
    <div className="projects" id="projects">
      <h2> Here are some recent projects</h2>
      <div className="card-flex">
        {/*  href="https://www.linkedin.com/in/andrewjbgrant/" target="blank"> */}
        <Card
          video={Video}
          title="Sweet-Paw"
          // imageUrl={SweetPaw}
          body={`Three person group Project part of Le Wagon
It is a website were you can rent out pets.

Built with Ruby on Rails, SCSS and JavaScript
Geo-map location
           `}
        />

        {/* href="https://the-book-buddy.herokuapp.com/" target="blank"> */}
        <Card
          video={Video}
          title="Book-Buddy"
          // imageUrl={Book1}
          body={`Three person group Project part of Le Wagon
It is a website were you can rent out  sweet pets.

Built with Ruby on Rails, Scss and JavaScript
Cloudinary
           `}
        />

        {/* href="https://www.linkedin.com/in/andrewjbgrant/" target="blank"> */}
        <Card
          video={Video}
          title="Weather-App"
          // imageUrl={logo}
          body={`A weather app built with React
Using Axios and Open Weather API
`}
        />
      </div>
    </div>
  );
}

export default Projects;
