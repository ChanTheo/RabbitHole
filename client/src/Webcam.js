import React, { useState, useEffect } from "react";
import * as faceapi from "face-api.js"; // npm i face-api.js
import axios from "axios"


export default function Webcam(props) {
  console.log("webcam", props);
  const startWebcam = () => {
    const constraints = { video: true };
    const webcam = document.getElementById("user_camera");
    navigator.mediaDevices.getUserMedia(constraints).then(video => {
      webcam.srcObject = video;
    });
    props.scanMood()
  };

  // useffect

  // useEffect(() => {
    // const startWebcam = () => {
    //   const constraints = { video: true };
    //   const webcam = document.getElementById("user_camera");
    //   navigator.mediaDevices.getUserMedia(constraints).then(video => {
    //     webcam.srcObject = video;
    //   });
    //   props.scanMood()
    // };
  // }, []);



  return (
    <section className="webcam_container">
      <h1> Welcome to the Rabbit Hole:   {props.user && props.user.user_name} </h1>

      <div className="webcam_buttons">
        <button onClick={startWebcam}>1: Toggle Camera</button>
        {/* <button onClick={}>2: Scan your Mood </button> */}
      </div>

      <div className="video_canvas">
        <canvas
          style={{ width: 800, height: 500 }}
          width="800px"
          height="500px"
          id="user_camera_canvas"
        ></canvas>
        <video
          style={{ width: 800, height: 500, backgroundColor: "black" }}
          width="800px"
          height="500px"
          autoPlay
          id="user_camera"
        ></video>
      </div>
    </section>
  );
}
