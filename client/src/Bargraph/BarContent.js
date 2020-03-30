import React from "react";
import "./BarContent.scss";
export default function BarContent() {
  const moods = {
    Surprised: ":😲",
    Disgusted: ":🤢",
    Neutral: ":😐",
    Sad: ":😢",
    Fearful: ":😱",
    Angry: ":😡",
    Happy: ":😁"
  };

  const moodArray = Object.entries(moods);

  const moodsElementArray = moodArray.map(mood => {
    return <div className="text">{mood}</div>;
  });

  return <div className="bar_content">{moodsElementArray}</div>;
}
