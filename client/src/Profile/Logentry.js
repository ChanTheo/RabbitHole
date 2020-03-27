import React, { useState } from "react";
import axios from "axios";
import "./Profile.scss";

export default function Logentry( props ) {
  const {
    created_at,
    video_id,
    surprised_percent,
    disgusted_percent,
    neutral_percent,
    sad_percent,
    fearful_percent,
    angry_percent,
    happy_percent
  } = props;

  // const moods = {
  //   neutral: "😐",
  //   angry: "😡",
  //   happy: "😁",
  //   sad: "😢",
  //   fearful: "😱",
  //   disgusted: "🤢",
  //   surprised: "😲"
  // };
  // console.log("Logitem", log);
  return (
    <div className="Logentry_container">
      <h2 className="Logentry_emotionBeforeVideo">Your Emotion Before the Video was: {props.emotionBeforeVideo}</h2>
      <img className="Logentry_img" src={props.img}  width="150" height="100">   
      </img>
      <ul className="Logentry_reaction">
        <li> 😐 {props.neutral_percent}%</li>
        <li> 😡{props.angry_percent}%</li>
        <li> 😁{props.happy_percent}%</li>
        <li> 😢{props.sad_percent}%</li>
        <li> 😱{props.fearful_percent}%</li>
        <li> 🤢{props.disgusted_percent}%</li>
        <li>😲{props.surprised_percent}%</li>
      </ul>
    </div>



     
  );
}


