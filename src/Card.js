import React from "react";
import "./Card.css";

function Card({ title, body, video, link, skills1, skills2, skills3 }) {
  return (
    <div className="card-container">
      <div className="image-container">
        {/* <img src={imageUrl} alt="why not??" className="image-container" width="600" height="400"/> */}
        <video src={video} width="350" height="400" controls></video>
      </div>

      <div className="card-right">
        <div className="card-content">
          <div className="card-title">
            <h3>{title} </h3>
            <div className="skills-projects">
              <strong>{skills1}</strong>
              <strong>{skills2}</strong>
              <strong>{skills3}</strong>
            </div>
          </div>

          <div className="card-body">
            <p>{body} </p>

            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4 className="website">Go To Website</h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
