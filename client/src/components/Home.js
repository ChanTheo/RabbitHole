import React, { Fragment, useState } from "react";
import "./Home.scss";

export default function Home(props) {
  return (
    <Fragment>
      <div className="home-container">
        <div className="home-title">
          <h1>
            {" "}
            Welcome to the RabbitHole: {props.user && props.user.username}{" "}
          </h1>
        </div>
        <div className="home-content"></div>
      </div>
    </Fragment>
  );
}
