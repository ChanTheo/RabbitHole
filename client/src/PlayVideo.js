import React, { useState } from "react";
import YouTube from "react-youtube"; // npm install react-youtube
import "./PlayVideo.scss";
import axios from "axios"


const PlayVideo = (props) => {
  // Adding more videos, then use setVideo
  const [videos, setVideos] = useState([
    {
      id: 1,
      videoId: "1VVvXojzgDs",
      img: "https://img.youtube.com/vi/1VVvXojzgDs/default.jpg",
      mood: "happy"
    },
    {
      id: 2,
      videoId: "YtF6p_w-cSc",
      img: "https://img.youtube.com/vi/YtF6p_w-cSc/default.jpg",
      mood: "happy"
    },
    {
      id: 3,
      videoId: "c4Se9YeTEcg",
      img: "https://img.youtube.com/vi/c4Se9YeTEcg/default.jpg",
      mood: "happy"
    },
    {
      id: 4,
      videoId: "KYVRgDRbyGc",
      img: "https://img.youtube.com/vi/KYVRgDRbyGc/default.jpg",
      mood: "happy"
    },
    {
      id: 5,
      videoId: "Nr2H5zLXvbM",
      img: "https://img.youtube.com/vi/Nr2H5zLXvbM/default.jpg",
      mood: "happy"
    }
  ]);
  // response for youtube id for playing video
  const [youtubeId, setYoutubeId] = useState(null);
  const [number, setNumber] = useState(1);


  const opts = {
    height: "300",
    width: "450",
    playerVars: {
      autoplay: 1,
      rel: 0,
      origin: "http://localhost:3000"
    }
  };

  const changeVideo = e => {
    setYoutubeId("8x-2m8HlnSo");
  };

  const changeVideoImage = t => {
    console.log("this", t);

    setYoutubeId(t);
  };

  // play next video after video is done.
  const playNextAuto = e => {
    // ?? error after playing last video ??
    if (!videos[number].videoId) {
      return;
    } else {
      const nextVideoId = videos[number].videoId;

      console.log("a", nextVideoId);

      setYoutubeId(nextVideoId);
      // increase number
      setNumber(number + 1);
      console.log("number", number);
      // event trigger to play video
      e.target.playVideo();
    }
  };
  // do we want on load to get this video
  const getNextVideo = function () {
    console.log(props.mood)
    let emotion_id = "";
    const userEmoji = props.mood;
    const moods = {
      neutral: "😐",
      angry: "😡",
      happy: "😁",
      sad: "😢",
      fearful: "😱",
      disgusted: "🤢",
      surprised: "😲"
    };
    for(const mood in moods) {
      
      if(moods[mood] === userEmoji) {
        console.log("moods[mood", moods[mood])
        console.log("moods[userEmoji]", moods[userEmoji])
        emotion_id = mood
      }
    }
    return axios({
      method: "GET",
      url: `/api/videos/emotions/:${emotion_id}/random`
    })
    .then(response => {
      console.log(response)
      
    })
  }

  

  return (
    <section className="personalPlayList">
      <div className="mainVideoPlayer">
        <YouTube
          className="container"
          videoId={youtubeId}
          opts={opts}
          onEnd={e => getNextVideo()}
          onReady={getNextVideo}
        />
      </div>
    </section>
  );
};

export default PlayVideo;
