import React from "react";
import Card from "./Card";
import "./Projects.css";
// import Video from "./images/video.mp4";
// import BookBuddy from "./images/Book-Buddy-video.mp4";
// import SweetPaw from "./images/Sweet-paw-video.mp4";
// import Weather from "./images/weather-app.mp4";

function Projects() {
  return (
    <div className="projects" id="projects">
      <h2> Here are some recent projects I have worked on</h2>
      {/* <h5>I am always building and working on different projects and ideas as I continue to grow as a developer</h5> */}

      <div className="card-flex">
        <Card
          // video={SweetPaw}
          title="Sweet-Paw"
          skills1={`Ruby on Rails`}
          skills2={`SCSS`}
          skills3={`JavaScript`}
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
          // video={BookBuddy}
          title="Book-Buddy"
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

        <Card
          // video={Weather}
          title="Weather-App"
          body={`A simple weather app I have been working on as I learn React
I wanted to learn more about Api's and
`}
          skills={`React Axios OpenWeather API`}
          link={"https://master--comforting-pika-5fcac7.netlify.app/"}
        />
      </div>
    </div>
  );
}

export default Projects;
