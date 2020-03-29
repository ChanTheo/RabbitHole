import React, { useState, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import "./Logentry.scss";
import cn from "classnames";

export default function Logentry(props) {
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
  const emotionFromProps = props.emotionBeforeVideo;
  console.log("emotionFromProps", emotionFromProps);
  return (
    <Fragment>
      <div className="Logentry_container">
        <h2 className={cn("Logentry_emotionBeforeVideo", [emotionFromProps])}>
          Your Emotion Before the Video was:&nbsp;&nbsp;&nbsp;
          <div className="Logentry_emotionBeforeVideo_result">
            {props.emotionBeforeVideo}
          </div>
        </h2>
        <div className="Logentry_content">
          <img
            className="Logentry_img"
            src={props.img}
            width="150"
            height="100"
          ></img>
          <ul className="Logentry_reaction">
            <li> 😐{props.neutral_percent}%</li>
            <li> 😡{props.angry_percent}%</li>
            <li> 😁{props.happy_percent}%</li>
            <li> 😢{props.sad_percent}%</li>
            <li> 😱{props.fearful_percent}%</li>
            <li> 🤢{props.disgusted_percent}%</li>
            <li> 😲{props.surprised_percent}%</li>
          </ul>
        </div>
      </div>
      {/* <Link to="/" className="">
        Go back
      </Link> */}
    </Fragment>
  );
}
