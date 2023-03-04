import React from "react";
import Card from "./Card";
import "./Projects.css";
// import logo from "./images/logo.png";
// import SweetPaw from "./images/Sweet-paw.png";
// import Book1 from "./images/bookbuddygood.jpg";
import Video from "./images/video.mp4";
import BookBuddy from "./images/Book-Buddy-video.mp4";
import SweetPaw from "./images/Sweet-paw-video.mp4";
// import Book2 from "./images/book-buddy2.jpg";

function Projects() {
  return (
    <div className="projects" id="projects">
      <h2> Here are some recent projects I have worked on</h2>

      <div className="card-flex">
        {/*  href="https://www.linkedin.com/in/andrewjbgrant/" target="blank"> */}
        <Card
          video={SweetPaw}
          title="Sweet-Paw"
          skills1={`Ruby on Rails`}
          skills2={`SCSS`}
          skills3={`JavaScript`}
          // imageUrl={SweetPaw}
          body={`Three person group Project part of Le Wagon
It is a website were you can rent out pets

Users can add their own pets as well as rent others
Can search by map location and filter by speices

Designed in Figma and deployed on Heroku
Using Cloudinary for image storage and
Postgresql for Data
`}
          link={"https://sweet-paw.herokuapp.com/"}
        />

        <Card
          video={BookBuddy}
          title="Book-Buddy"
          // title="Book-Buddy"
          // imageUrl={Book1}
          body={`Final group Project part of Le Wagon
It is a mobile app to trade books

Deployed on Heroku
Users can search books by author, catergory or title
Can add a copy of a book to trade

           `}
          skills1={`Ruby on Rails`}
          skills2={`SCSS`}
          skills3={`JavaScript`}
          link={"https://www.book-buddy.me/"}
        />

        {/* href="https://www.linkedin.com/in/andrewjbgrant/" target="blank"> */}
        <Card
          video={Video}
          title="Weather-App"
          // imageUrl={logo}
          body={`A simple weather app I have been working on as I learn React
I wanted to learn more about Api's and
`}
          skills={`React Axios OpenWeather API`}
        />
      </div>
      {/* <h5>I am always building and working on different projects and ideas as I continue to grow as a developer</h5> */}
    </div>
  );
}

export default Projects;
