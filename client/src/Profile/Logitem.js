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
  console.log("Logitem", log);
  return (
    <li>
      id: {id}, user id: {user_id}, video_id: {video_id}, watch_log_id:{" "}
      {watch_log_id}, surprised_percent: {surprised_percent}, disgusted_percent:{" "}
      {disgusted_percent}, neutral_percent: {neutral_percent}, sad_percent:{" "}
      {sad_percent}, fearful_percent: {fearful_percent}, angry_percent:{" "}
      {angry_percent}, happy_percent: {happy_percent}, created_at: {created_at}
    </li>
  );
}

/**
 * id: 2
user_id: 2
is_public: true
created_at: "2020-03-26T01:40:25.714Z"
updated_at: "2020-03-26T01:40:25.714Z"
video_id: 2
watch_log_id: 2
surprised_percent: 30
disgusted_percent: 10
neutral_percent: 30
sad_percent: 10
fearful_percent: 10
angry_percent: 10
happy_percent: 10
 */
