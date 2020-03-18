import React, { useState, useEffect } from "react";
import * as faceapi from "face-api.js"; // npm i face-api.js

export default function Webcam(props) {
  console.log("webcam", props)
  const [canvas, setCanvas] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [userMood, setUserMood] = useState(null);

  // This loads the models
  useEffect(() => {
    faceapi.nets.faceLandmark68Net
      .loadFromUri("/models")
      .then(error => console.log("FaceLandmark Model Loaded", error));
    faceapi.nets.ssdMobilenetv1
      .loadFromUri("/models")
      .then(error => console.log("ssdMobilenetv1 Model Loaded", error));
    faceapi.nets.faceExpressionNet
      .loadFromUri("/models")
      .then(error => console.log("FaceExpression Model Loaded", error));
  }, []);

  // These are emoji's that match the 7 expressions the model can output
  const moods = {
    neutral: "😐",
    angry: "😡",
    happy: "😁",
    sad: "😢",
    fearful: "😱",
    disgusted: "🤢",
    surprised: "😲"
  }


  const startWebcam = () => {
    const constraints = { video: true };
    const webcam = document.getElementById("user_camera");
    navigator.mediaDevices.getUserMedia(constraints).then(video => {
      webcam.srcObject = video;
    });
  };

  const getIntialMood = function () {
    // get user camera
    const webcam = document.getElementById("user_camera")

    // scan face once (wait a few seconds after the click event, this will only happen once)
    setTimeout(() => {
      faceapi
        .detectSingleFace(webcam)
        .withFaceExpressions()
        .withFaceLandmarks()
        .withFaceExpressions()
        .then(faceapiResults => {
          console.log(faceapiResults)
          // need to cycle through the results.expressions after checking if they exists
          let currentEmotion = "neutral"
          // nuetral is the most common so it is the place holder
          if (faceapiResults) {
            for (const emotion in faceapiResults.expressions) {
              if (faceapiResults.expressions[emotion] > faceapiResults.expressions[currentEmotion]) {
                currentEmotion = emotion
              }
            }
          }
          setUserMood(moods[currentEmotion])
          console.log("User's current emotion is:" + currentEmotion)
        })

    }, 1800)
    // here we will do some logic to start playing youtube videos

  }

  return (
    <section className="webcam_container">
      <h1> Welcome to the Rabbit Hole:   {props.user.user_name} </h1>

      <div classname="webcam_buttons">
        <button onClick={startVideo}>1: Toggle Camera</button>
        <button onClick={getIntialMood}>2: Scan your Mood </button>
      </div>

      <div className="userMood_emoji">
        <span fontSize="10em">{userMood}</span>
      </div>
      <div className="video_canvas">
        <canvas
          style={{ width: 800, height: 500 }}
          width="800px"
          height="500px"
          id="user_camera_canvas"
        >
        </canvas>
        <video
          // eventually move all inline styling to scss file 
          style={{ width: 800, height: 500, backgroundColor: 'black' }}
          width="800px"
          height="500px"
          autoPlay
          id="user_camera"
        ></video>
      </div>
    </section>
  );
}