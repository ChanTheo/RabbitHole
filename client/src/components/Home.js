import React, { Fragment, useState } from "react";
import "./Home.scss";

export default function Home(props) {
  return (
    <Fragment>
      <div className="home-container">
        <div className="home-title">
          <h1> RabbitHole </h1>
        </div>
        <div className="home-content">
          <p>
            Our app uses TensorFlow’s models to gauge the emotions of the user
            between videos and then makes a recommendation for the next video
            based on this recorded emotion.
          </p>
        </div>
      </div>
    </Fragment>
  );
}
