import React, {useEffect} from "react"

import {Bar,} from 'react-chartjs-2';

export default function Graph (props) {

  const data = {
    labels: ["Surprised: 😲",
    "Disgusted: 🤢",
    "Neutral :😐",
    "Sad: 😢",
    "Fearful: 😱",
    "Angry: 😡",
    "Happy: 😁",],
    datasets: [
      {
        label: 'Emotion Percentage',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: []
      }
    ]
  };

  // useEffect(() => {
    const setGraphData = function (expressions) {
      let i = 0;
      const length = 6
      console.log("expressions Length", length)
      if(i <= length) {
        for (const expression in expressions){
          data.datasets.data[i] = expressions[expression]
          i++;
        }
      }
    }
  // }, [props.expressions]);

  return (
    <div>
      <h2>Bar Example </h2>
      <Bar
        data={data}
        width={100}
        height={50}
        options={{
          maintainAspectRatio: false
        }}
        onChange={setGraphData()}
      />
    </div>
  );

}