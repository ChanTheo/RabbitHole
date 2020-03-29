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
  const setGraphData = function (expressions) {
    let i = 0;
    const length = 6
    if(i <= length) {
      for (const expression of expressions){
        data.datasets[0].data.push(expressions[expression])
        i++;
      }
    }
  }
    
    console.log(data.datasets.data, "data.datasets")
  

  return (
    <div>
      <h2>{props.title} </h2>
     {props.expressions && <div className="Graph_container"> 
     {setGraphData(props.expressions)}
      <Bar
        data={data}
        width={100}
        height={50}
        options={{
          maintainAspectRatio: false
        }}
      />
      </div>}
    </div>
  );

}