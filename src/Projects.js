import React from "react";
import Card from "./Card";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects" id="projects">
      <h2> Here are some recent projects I have worked on</h2>
      {/* <h5>I am always building and working on different projects and ideas as I continue to grow as a developer</h5> */}

      <div className="card-flex">
        <Card
          video={
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/kuICQgGo6NE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          }
          title="Sweet-Paw"
          skills1={`Ruby on Rails`}
          skills2={`SCSS`}
          skills3={`JavaScript`}
          body={`Three person group Project part of Le Wagon
It is a website were you can rent out pets

Users can add their own pets as well as rent others.
Can search by map location and filter by speices

Designed in Figma and deployed on Heroku
Using Cloudinary for image storage and
Active Record for Data
`}
          link={"https://sweet-paw.herokuapp.com/"}
        />

        <Card
          video={
            <iframe
              width="360"
              height="100%"
              src="https://www.youtube-nocookie.com/embed/HRLhXzDTjv0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          }
          title="Book-Buddy"
          body={`Final group Project part of Le Wagon
It is a mobile app to trade books
Deployed on Heroku
Users can search books by author, catergory or title
Can add a copy of a book to trade and leave reviews
We used Google Books Api to fill the database
Websocket and Action cable to build a chat function

           `}
          skills1={`Ruby on Rails`}
          skills2={`SCSS`}
          skills3={`JavaScript`}
          link={"https://www.book-buddy.me/"}
        />

        <Card
          video={
            <iframe
              width="360"
              height="100%"
              src="https://www.youtube.com/embed/qWM0Oo7kf5s"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          }
          title="Weather-App"
          body={`A simple weather app I have been working on
as I learn React

I wanted to learn more about Apis
and used Axios to make two calls to
the Open Weather Api to first grt thr
`}
          skills1={`React`}
          skills2={`Open weather Api`}
          link={"https://master--comforting-pika-5fcac7.netlify.app/"}
        />
      </div>
    </div>
  );
}

export default Projects;
