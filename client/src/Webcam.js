import React, { useState, useEffect } from "react";
import * as faceapi from "face-api.js"; // npm i face-api.js
import axios from "axios"


export default function Webcam(props) {
  console.log("webcam", props);
  const [canvas, setCanvas] = useState(undefined);
  const [loading, setLoading] = useState(false);

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
  };

  const testRoute = e => {
    e.preventDefault();
    return axios({
      method: "GET",
      url: "/api/videos"
    }).then(data => console.log(data));
  };

  const startWebcam = () => {
    const constraints = { video: true };
    const webcam = document.getElementById("user_camera");
    navigator.mediaDevices.getUserMedia(constraints).then(video => {
      webcam.srcObject = video;
    });
  };

  const analysisForSingleVideo =  () => {
    // need to find how to trigger this after the video

  }

  const scanMood = () => {
    // should probably take in the video ID so this can be sent to the DB
    // where does the watch_log id come from
    // should users be conneted to watch_log entries and watch_log in db?
    const webcam = document.getElementById("user_camera")

    setTimeout(() => {
      faceapi
        .detectSingleFace(webcam)
        .withFaceLandmarks()
        .withFaceExpressions()
        .then(faceapiResults => {
          console.log(faceapiResults)
          const neutral_percent = faceapiResults.expressions.neutral
          const disgusted_percent = faceapiResults.expressions.disgusted
          const surprised_percent = faceapiResults.expressions.surprised
          const happy_percent = faceapiResults.expressions.happy
          const angry_percent = faceapiResults.expressions.angry
          const fearful_percent = faceapiResults.expressions.fearful
          const sad_percent = faceapiResults.expressions.sad
    

          // const data = {
          //   surprised_percent,
          //   disgusted_percent,
          //   neutral_percent,
          //   sad_percent,
          //   fearful_percent,
          //   angry_percent,
          //   happy_percent,
          // }

         

          // send them to the db

          // return axios({
          //   method: "POST",
            // url: "users/:id/watch_log/:id/log_entries",
          //   data: {
              // surprised_percent,
              // disgusted_percent,
              // neutral_percent,
              // sad_percent,
              // fearful_percent,
              // angry_percent,
              // happy_percent,
          //   }
          // })

          props.setExpressions(surprised_percent,
            disgusted_percent,
            neutral_percent,
            sad_percent,
            fearful_percent,
            angry_percent,
            happy_percent)

          // pass the % to the graph 
          // need to round them to the nearest number
          
          let currentEmotion = "neutral"
          // nuetral is the most common so it is the place holder
          if (faceapiResults) {
            for (const emotion in faceapiResults.expressions) {
              if (faceapiResults.expressions[emotion] > faceapiResults.expressions[currentEmotion]) {
                currentEmotion = emotion
              }
            }
          }
          props.setUserMood(moods[currentEmotion])
        })

    }, 1800)
  }

  const getIntialMood = function () {
    // get user camera
    const webcam = document.getElementById("user_camera");

    // scan face once (wait a few seconds after the click event, this will only happen once)
    setTimeout(() => {
      faceapi
        .detectSingleFace(webcam)
        .withFaceLandmarks()
        .withFaceExpressions()
        .then(faceapiResults => {
          console.log(faceapiResults);
          // need to cycle through the results.expressions after checking if they exists
          let currentEmotion = "neutral";
          // nuetral is the most common so it is the place holder
          if (faceapiResults) {
            for (const emotion in faceapiResults.expressions) {
              if (
                faceapiResults.expressions[emotion] >
                faceapiResults.expressions[currentEmotion]
              ) {
                currentEmotion = emotion;
              }
            }
          }
          props.setUserMood(moods[currentEmotion])
          
          console.log("User's current emotion is:" + currentEmotion)
        })

    }, 1800)
    // here we will do some logic to start playing youtube videos
  };

  return (
    <section className="webcam_container">
      <h1> Welcome to the Rabbit Hole:   {props.user && props.user.user_name} </h1>

      <div className="webcam_buttons">
        <button onClick={startWebcam}>1: Toggle Camera</button>
        <button onClick={scanMood}>2: Scan your Mood </button>
        {/* {props.mood === null && scanMood()} */}
      </div>

      <div className="userMood_emoji">
        <span fontSize="10em">{props.mood}</span>
      </div>
      <div className="video_canvas">
        <canvas
          style={{ width: 800, height: 500 }}
          width="800px"
          height="500px"
          id="user_camera_canvas"
        ></canvas>
        <video
          // eventually move all inline styling to scss file
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
