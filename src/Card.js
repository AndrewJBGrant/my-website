import React from "react";
import "./Card.css";

function Card({ title, body, video, link, skills1, skills2, skills3 }) {

return (
    <div className="card-container">
      <div className="image-container">
        <span className="span">{video}</span>
      </div>

      <div className="card-right">
        <div className="card-content">
          <div className="card-title">
            <h3>{title} </h3>
          </div>

          <div className="card-body">
            <p>{body} </p>


            <div className="bottom">
              <div className="skills-projects">
                <strong>{skills1}</strong>
                <strong>{skills2}</strong>
                <strong>{skills3}</strong>
              </div>


              <div className="website">
                <button className="link-button">
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    Go to Website
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
