import React, { useState } from "react";
import YouTube from "react-youtube"; // npm install react-youtube
import "./PlayVideo.scss";
import axios from "axios"


const PlayVideo = (props) => {
 
  const opts = {
    height: "300",
    width: "450",
    playerVars: {
      autoplay: 1,
      rel: 0,
      origin: "http://localhost:3000"
    }
  };

  
  // // play next video after video is done.
  // const playNextAuto = e => {
  //   // ?? error after playing last video ??
  //   if (!videos[number].videoId) {
  //     return;
  //   } else {
  //     const nextVideoId = videos[number].videoId;

  //     console.log("a", nextVideoId);

  //     setYoutubeId(nextVideoId);
  //     // increase number
  //     setNumber(number + 1);
  //     console.log("number", number);
  //     // event trigger to play video
  //     e.target.playVideo();
  //   }
  // };
  // do we want on load to get this video
 


  return (
    <section className="personalPlayList">
      <div className="mainVideoPlayer">
        <YouTube
          className="container"
          videoId={props.youtubeId}
          opts={opts}
          onEnd={() => props.scanMood()}
          // onReady={() => props.getNextVideo}
        />
      </div>
    </section>
  );
};

export default PlayVideo;
