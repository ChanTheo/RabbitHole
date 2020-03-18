import React, { useState, useEffect } from "react";
import * as faceapi from "face-api.js"; // npm i face-api.js

export default function Webcam (props) {
	// const [canvas, setCanvas] = useState(undefined);
  // const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
	const [videoCanvas, setVideoCanvas] = useState(undefined);
  const [currentEmoji, setCurrentEmoji] = useState("");
  
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



  
	const startVideo = () => {
		const constraints = { video: true };
		const video = document.getElementById("user_camera");
		navigator.mediaDevices.getUserMedia(constraints).then(stream => {
			video.srcObject = stream;
		});
  };
  
  const getIntialMood = function () {
    // get user camera
    const webcam = document.getElementById("user_camera")

    // scan face once (wait a few seconds after the click event, this will only happen once)
    setTimeout(() => {
      faceapi
          .detectSingleFace(webcam)
          .withFaceLandmarks()
          .withFaceExpressions()
          .then(faceapiResults => {
            console.log(faceapiResults)
            // need to cycle through the results.expressions after checking if they exists
            if(faceapiResults){
              
            }
          })

    }, 1800)

  }
  
  return(
<section className="webcam_container">
					<h1> Welcome to the Rabbit Hole: {state.user.user_name ? state.user.user_name : null} </h1>
					<div>
						<button onClick={startVideoEmoji}>1: Turn on Webcam</button>
						<button onClick={getIntialMood}>2: Find out your mood!</button>
					</div>
					<div>
						<span style={{ fontSize: "4em" }}>{currentEmoji}</span>
					</div>
					<div className="testImage">
						<canvas
            // eventually move all inline styling to scss file 
							style={{ width: 800, height: 500 }}
							width="640px"
							height="480px"
							id="test_canvas_video_emoji"
						></canvas>
						<video
            // eventually move all inline styling to scss file 
							style={{ width: 800, height: 500  }}
							width="640px"
							height="480px"
							autoPlay
							id="user_camera"
						></video>
					</div>
				</section>
  );
}