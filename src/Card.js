import React from "react";
import "./Card.css";

function Card({ title, body, video, link, skills1, skills2, skills3 }) {
  return (
    <div className="card-container">
      <div className="image-container">
        <span className="span">{video}</span>
      </div>

      <div className="card-body">
        <h3>{title} </h3>
        <span>{body}</span>

        <section>
          <strong>{skills1}</strong>
          <strong>{skills2}</strong>
          <strong>{skills3}</strong>
        </section>

        <section className="bottom">
          <button className="link-button">
            <a href={link} target="_blank" rel="noopener noreferrer">
              Go to Website
            </a>
          </button>
        </section>
      </div>
    </div>
  );
}

export default Card;
