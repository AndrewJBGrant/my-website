import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Weather-App</h2>

            <p>
This App was a way to test the React skills I have been leanring since finishing Le Wagon.<br/>
It is a very simple design
I wanted to learn more about Apis and this was a great chance taking advantage of Axios and ultizing the Open Weather Api
I made two different calls the first taking the City requested by the User, using that information to get the get the temperature,
            </p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
