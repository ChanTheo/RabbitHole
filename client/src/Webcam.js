import React, { useState, useEffect } from "react";
import * as faceapi from "face-api.js"; // npm i face-api.js
import axios from "axios";
import "./Webcam.scss";

export default function Webcam(props) {
  const startWebcam = () => {
    const constraints = { video: true };
    const webcam = document.getElementById("user_camera");
    navigator.mediaDevices.getUserMedia(constraints).then(video => {
      webcam.srcObject = video;
    });
    props.scanMood();
  };

  return (
    <section className="webcam_container">
     

      <div className="webcam_buttons">
        <button onClick={startWebcam}>1: Start Rabbit Hole</button>
      </div>


      <video
        style={{ width: 800, height: 500 }}
        width="0px"
        height="0px"
        autoPlay
        id="user_camera"
      ></video>
    </section>
  );
}
