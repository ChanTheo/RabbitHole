import React, { useState } from "react";
import axios from "axios";
import "./Profile.scss";

export default function Logitem({ log }) {
  const {
    id,
    user_id,
    is_public,
    created_at,
    updated_at,
    video_id,
    watch_log_id,
    surprised_percent,
    disgusted_percent,
    neutral_percent,
    sad_percent,
    fearful_percent,
    angry_percent,
    happy_percent
  } = log;

  // const moods = {
  //   neutral: "😐",
  //   angry: "😡",
  //   happy: "😁",
  //   sad: "😢",
  //   fearful: "😱",
  //   disgusted: "🤢",
  //   surprised: "😲"
  // };
  console.log("Logitem", log);
  return (
    // const moods = {
    //   neutral: "😐",
    //   angry: "😡",
    //   happy: "😁",
    //   sad: "😢",
    //   fearful: "😱",
    //   disgusted: "🤢",
    //   surprised: "😲"
    // };
    <li>
      video_id: {video_id},{watch_log_id}, surprised_percent:{" "}
      {surprised_percent}, disgusted_percent: {disgusted_percent}, 😐:{" "}
      {neutral_percent}, 😢: {sad_percent}, fearful_percent: {fearful_percent},
      angry_percent: {angry_percent}, happy_percent: {happy_percent},
      created_at: {created_at}
    </li>
  );
}
