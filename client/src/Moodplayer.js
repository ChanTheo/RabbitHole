import React, { useState, useEffect } from "react";
import * as faceapi from "face-api.js"; // npm i face-api.js
import Webcam from "./Webcam";
import PlayVideo from "./PlayVideo";
import Graph from "./Graph/index";
import "./Moodplayer.scss";
import axios from "axios";

export default function Moodplayer(props) {
  //Local state in the MoodPlayer component
  const [youtubeId, setYoutubeId] = useState(null);
  const [showVidePlayer, setShowVideoPlayer] = useState(false);
  const [showGraph, setShowGraph] = useState(false);
  const [graphExpressions, setGraphExpressions] = useState(null);
  const [videoIDFromDB, setvideoIDFromDB] = useState(null);
  const [moodEmoji, setMoodEmoji] = useState(null)


  //loads the models
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

  const moods = {
    neutral: "😐",
    angry: "😡",
    happy: "😁",
    sad: "😢",
    fearful: "😱",
    disgusted: "🤢",
    surprised: "😲",
  };



  const getNextVideo = function(mood) {
    const moodsArray = Object.keys(moods)
    console.log("getnextvideo", mood)
    let emotion_id = 1;
    for (let i = 0; i < moodsArray.length; i++) {
      if (moodsArray[i] === mood) {
        emotion_id += i;
      }
    }
console.log("emotion_id" ,emotion_id)
    return axios({
      method: "GET",
      url: `/api/videos/emotions/random/${emotion_id}` // /api/videos/emotions/${emotion_id}/random/
    })
      .then(response => {
        console.log(response);
        setYoutubeId(response.data.yt_video_id);
        setvideoIDFromDB(response.data.id);
        setShowVideoPlayer(true);
      })
      .catch(e => console.log(e));
  };

  const createWatchLogEntry = (
    surprised_percent,
    disgusted_percent,
    neutral_percent,
    sad_percent,
    fearful_percent,
    angry_percent,
    happy_percent
  ) => {
    return axios({
      method: "POST",
      url: `/api/watch_logs/${props.watchLogID}`,
      data: {
        surprised_percent,
        disgusted_percent,
        neutral_percent,
        sad_percent,
        fearful_percent,
        angry_percent,
        happy_percent,
        video_id: videoIDFromDB,
        watch_log_id: props.watchLogID
      }
    })
      .then(result => result)
      .catch(e => console.log(e));
  };

  // scans the face
  const scanMood = () => {
    // should probably take in the video ID so this can be sent to the DB
    const webcam = document.getElementById("user_camera");
      faceapi
        .detectSingleFace(webcam)
        .withFaceLandmarks()
        .withFaceExpressions()
        .then(faceapiResults => {

          if(!faceapiResults) {
            console.error("Faceapi had 0 results")
          }
          console.log(faceapiResults);
          const neutral_percent = Math.floor(
            faceapiResults.expressions.neutral * 100
          );
          const disgusted_percent = Math.floor(
            faceapiResults.expressions.disgusted * 100
          );
          const surprised_percent = Math.floor(
            faceapiResults.expressions.surprised * 100
          );
          const happy_percent = Math.floor(
            faceapiResults.expressions.happy * 100
          );
          const angry_percent = Math.floor(
            faceapiResults.expressions.angry * 100
          );
          const fearful_percent = Math.floor(
            faceapiResults.expressions.fearful * 100
          );
          const sad_percent = Math.floor(faceapiResults.expressions.sad * 100);
          setGraphExpressions({
            surprised_percent,
            disgusted_percent,
            neutral_percent,
            sad_percent,
            fearful_percent,
            angry_percent,
            happy_percent
          });

          setShowGraph(true)
            
            
          let currentEmotion = "neutral";
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
          setMoodEmoji(moods[currentEmotion]);
          getNextVideo(currentEmotion);
          
          // create a watch log entry or create a watchlog
          if (props.watchLogID) {
            createWatchLogEntry(
              surprised_percent,
              disgusted_percent,
              neutral_percent,
              sad_percent,
              fearful_percent,
              angry_percent,
              happy_percent
            );
          } else if (props.user) {
            return axios({
              method: "POST",
              url: `/api/users/watch_logs/${props.user.id}`
            }).then(result => {
              props.setWatchLogID(result.data.id);
            });
          }
        });
      
    // here we will do some logic to start playing youtube videos
  };

  return (
    <section className="Moodplayer_container">
      {showVidePlayer && (
        <div className="Youtube_container">
          <PlayVideo
            user={props.user}
            mood={props.mood}
            setUserMood={props.setUserMood}
            scanMood={scanMood}
            youtubeId={youtubeId}
          />
        </div>
      )}
    {moodEmoji && 
      <div className="userMood_emoji">
        <span>{moodEmoji}</span>
      </div>}

      <div className="Webcam_container">
        <Webcam
          user={props.user}
          setUserMood={props.setUserMood}
          mood={props.mood}
          setExpressions={props.setExpressions}
          expressions={props.expressions}
          setWatchLogID={props.setWatchLogID}
          scanMood={scanMood}
        />
      </div>
      {showGraph && (
        <div className="graph_container">
          <Graph expressions={graphExpressions}/>
        </div>)}
    </section>
  );
}
