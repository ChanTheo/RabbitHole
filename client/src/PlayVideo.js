import React, { useState } from "react";
import YouTube from "react-youtube";
import "./PlayVideo.scss";
// npm install react-youtube

const PlayVideo = () => {
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
  const [youtubeId, setYoutubeId] = useState("1VVvXojzgDs");
  const [number, setNumber] = useState(1);

  // console.log("videos", videos);
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

  return (
    <section className="personalPlayList">
      <h2>Your current Mood:</h2>
      <div className="mainVideoPlayer">
        <YouTube
          className="container"
          videoId={youtubeId}
          opts={opts}
          onEnd={playNextAuto}
        />
      </div>

      <h2>Watching Log</h2>
      <ul>
        {videos.map(video => (
          <li>
            <img
              key={video.id}
              src={video.img}
              width="150"
              height="100"
              title={video.videoId}
              onClick={() => changeVideoImage(video.videoId)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PlayVideo;
