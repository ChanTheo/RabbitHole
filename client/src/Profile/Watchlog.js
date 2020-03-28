import React, {useState, useEffect} from "react";
import Watchloglistitem from "./Watchloglistitem";
import axios from "axios"
import Logentry from "./Logentry"

export default function Watchlog(props) {
  const [logEntries, setLogEntries] = useState([]);
  console.log("Outside of useEffect", props);
  // console.log("Watchlog", logEntries);
// useEffect 




useEffect(() => {;
  const getLogEntriesForWatchLog = watchlogid => {
    return axios({
      method: "GET",
      url: `/api/watch_logs/log_entries/${watchlogid}`
    }).then(result => {
      console.log("getlogentriesforWatchlog", result)
      setLogEntries(result.data)
    })
  }
  
  getLogEntriesForWatchLog(props.currentWatchLogId)
}, [props.currentWatchLogID])

const renderLogEntries = (logEntries) => {
  const elements = logEntries.map(entry => {
    return(
      <Logentry
      surprised_percent={entry.surprised_percent}
    disgusted_percent={entry.disgusted_percent}
    neutral_percent={entry.neutral_percent}
    sad_percent={entry.sad_percent}
    fearful_percent={entry.fearful_percent}
    angry_percent={entry.angry_percent}
    happy_percent={entry.happy_percent}
    emotionBeforeVideo={entry.description}
    key={entry.yt_video_id}
    img={entry.img}
      />
    )
  }) 
  return elements;
}
  return (
    <div className="Watchlogs_container">
      <div className="Watchlog_container">
        <div className="Watchlog_date">
          
        </div>
        <ul className="Watchlog_entries">
          {logEntries && renderLogEntries(logEntries)}
        </ul>

      </div>
    </div>
  );
}
