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
      <h2> Here are some recent projects I have worked on</h2>

      <div className="card-flex">
        {/*  href="https://www.linkedin.com/in/andrewjbgrant/" target="blank"> */}
        <Card
          video={Video}
          title="Sweet-Paw"
          skills={`Ruby/Rails SCSS Javascript`}
          // imageUrl={SweetPaw}
          body={`Three person group Project part of Le Wagon
It is a website were you can rent out pets

Users can add their own pets as well as rent others
Can search by map location and filter by speices

Designed in Figma and deployed on Heroku
`}
link={"https://sweet-paw.herokuapp.com/"}

        />


        <Card
          video={Video}
          // title="Book-Buddy"
          // imageUrl={Book1}
          body={`Final group Project part of Le Wagon
It is a mobile app to trade books

Deployed on Heroku
Users can search books by author, catergory or title
Can add a copy of a book to trade

           `}
           skills={`Ruby on Rails  SCSS  Javascript`}
           link={"https://www.book-buddy.me/"}
        />

        {/* href="https://www.linkedin.com/in/andrewjbgrant/" target="blank"> */}
        <Card
          video={Video}
          title="Weather-App"
          // imageUrl={logo}
          body={`Three person group Project part of Le Wagon
It is a website were you can rent out pets

Designed in Figma and deployed on Heroku
Users can add their own pets as well as rent others
Can search by map location and filter by speices

Built with Ruby on Rails, SCSS  and JavaScript stimulus controllers
Using Cloudinary for images and Active Record for data
`}
        />
      </div>
      {/* <h5>I am always building and working on different projects and ideas as I continue to grow as a developer</h5> */}
    </div>
  );
}

export default Projects;
