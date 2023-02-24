import React from "react";
import "./Card.css";

function Card({ title, imageUrl, body }) {
  return (
    <div className="card-container">
      <div className="card-left">
        <div className="image-container">
          <img src={imageUrl} alt="" />
          <div className="btn">
            <button>Github</button>
          </div>
          <div className="btn">
            <button>Website</button>
          </div>
        </div>
      </div>

      <div className="card-right">
        <div className="card-content">
          <div className="card-title">
            <h3>{title} </h3>
          </div>

          <div className="card-body">
            <p>{body} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
