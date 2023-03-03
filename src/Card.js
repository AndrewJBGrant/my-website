import React from "react";
import "./Card.css";

function Card({ title, body, video, link, skills}) {
  return (
    <div className="card-container">
      <div className="image-container">
        {/* <img src={imageUrl} alt="why not??" className="image-container" width="600" height="400"/> */}
        <video src={video} width="350" height="300" controls></video>
      </div>

      <div className="card-right">
        <div className="card-content">
          <div className="card-title">
            <h3>{title} </h3>
            <h6><strong>{skills}</strong></h6>
          </div>

          <div className="card-body">
            <p>{body} </p>

           <button>website</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Card;
