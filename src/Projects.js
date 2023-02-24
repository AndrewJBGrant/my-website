import React from "react";
import Card from "./Card";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects" id="projects">
      <h1> Here are some recent projects</h1>
      <div className="card-flex">
        <Card
          title="Sweet-Paw"
          imageUrl="https://source.unsplash.com/Fm17vn1lmAQ"
          body="This was the first Le wagon Project we built in teams, an Airbnb 'clone'
          It is a website were you can rent out  sweet pets.

          Built in Ruby on Rails with SCSS and some JavaScript.The website has user authentication,

          we took advantage of some of the Gems available for Rails
           "
        />

        <Card
          title="Book-Buddy"
          imageUrl="https://source.unsplash.com/Fm17vn1lmAQ"
          body="The main project from le wagon we built an app to swap or sell books
          he main project from le wagon we built an app to swap or sell books
          he main project from le wagon we built an app to swap or sell books
          he main project from le wagon we built an app to swap or sell books
          "
        />
        <Card
          title="Weather-App"
          imageUrl="https://source.unsplash.com/Fm17vn1lmAQ"
          body="A simple weather app built with React using Axios and the Open Weather Api"
        />
      </div>
    </div>
  );
}

export default Projects;
