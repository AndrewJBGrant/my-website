import React from "react";
import Card from "./Card";

function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="card-flex">
        <Card
          title="Title"
          imageUrl="https://source.unsplash.com/Fm17vn1lmAQ/400x300"
          body="this is information about the project
etc
etc"
        />

        <Card
          title="Title"
          imageUrl="https://source.unsplash.com/Fm17vn1lmAQ/400x300"
          body="this is information about the project
etc
etc"
        />

        <Card
          title="Title"
          imageUrl="https://source.unsplash.com/Fm17vn1lmAQ/400x300"
          body="this is information about the project
etc
etc"
        />
      </div>
    </div>
  );
}

export default Projects;
