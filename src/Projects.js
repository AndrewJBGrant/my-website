import React from "react";
import Card from "./Card";
import "./Projects.css";
import logo from "./images/logo.png";
import SweetPaw from "./images/Sweet-paw.png";
//import Book1 from "./book-buddy1.jpg";
import Book2 from "./images/book-buddy2.jpg";

function Projects() {
  return (
    <div className="projects" id="projects">
      <h1> Here are some recent projects</h1>
      <div className="card-flex">
        <Card
          title="Sweet-Paw"
          imageUrl={SweetPaw}
          body={`Three person group Project part of Le Wagon
It is a website were you can rent out  sweet pets.

Built in Ruby on Rails with SCSS and JavaScript
The website has user authentication, Geo-map location
we took advantage of some of the Gems available for Rails
           `}
        />

        <Card
          title="Book-Buddy"
          imageUrl={Book2}
          body={`The main project from le wagon we built an app to swap or sell books
          he main project from le wagon we built an app to swap or sell books
          he main project from le wagon we built an app to swap or sell books
          he main project from le wagon we built an app to swap or sell books
          `}
        />
        <Card
          title="Weather-App"
          imageUrl={logo}
          body={`A simple weather app built with React using Axios and the Open Weather Api

This App was a way to test what I have been learning in React such as useState and Conditional rendering

I wanted to learn more about Apis and here I made two different calls
the first taking the City requested by the User, using that information to get the get a five day forecast`}
        />
      </div>
    </div>
  );
}

export default Projects;
