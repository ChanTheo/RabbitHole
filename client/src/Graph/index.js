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
    console.log("insetGraph data", expressions)
     
     
      Object.entries(expressions).forEach(entry => {
        const [expression, percent] = entry;
        data.datasets[0].data.push(percent);
      });
      
      console.log("Here is the data for the graph:")
      console.log(data.datasets[0]);
      }
      
setGraphData(props.expressions)

    
  

  return (
    <div>
      <h2>{props.title} </h2>
     
     <div className="Graph_container"> 
     
      <Bar
        data={data}
        width={100}
        height={500}
        options={{
          maintainAspectRatio: false
        }}
      />
      </div>
    </div>
  );

}