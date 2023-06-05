import React from "react";
import Card from "./Card";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects" id="projects">
      <h1> Some projects I have worked on</h1>
      {/* <h5>I am always building and working on different projects and ideas as I continue to grow as a developer</h5> */}

      <div className="card-flex">
        <Card
          video={
            <iframe
              width="300"
              height="300"
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
          body={`3 person group Project part of Le Wagon
          A website to rent/swap pets

Users can add their own pets as well as rent others.
Can search by map location and filter by speices

Using Figma and deployed on Heroku
Cloudinary for image storage and
Active Record for Data`}
          link={"https://sweet-paw.herokuapp.com/"}
        />

        <Card
          video={
            <iframe
              width="300"
              height="300"
              src="https://www.youtube-nocookie.com/embed/HRLhXzDTjv0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          }
          title="Book-Buddy"
          body={`Final group Project from Le Wagon
Mobile app for users to swap books

Search for books by author, catergory or title
Add a copy of a book to trade and leave reviews

Deployed on Heroku
Google Books Api to fill the database
Websocket and Action cable for a chat function`}
          skills1={`Ruby on Rails`}
          skills2={`SCSS`}
          skills3={`JavaScript`}
          link={"https://www.book-buddy.me/"}
        />

        <Card
          video={
            <iframe
              width="300"
              height="300"
              src="https://www.youtube.com/embed/qWM0Oo7kf5s"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          }
          title="Weather-App"
          body={`A weather app I am working on as
I learn React

Can search by city for current temperature
and a five day forecast

learning more about Apis and
using Axios to help make two calls to the
Open weather Api`}
          skills1={`React`}
          skills2={`Open weather Api`}
          skills3={`CSS`}
          link={"https://master--comforting-pika-5fcac7.netlify.app/"}
        />
      </div>
    </div>
  );
}

export default Projects;
