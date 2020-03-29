import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Profile.scss";
import Loglist from "./Loglist";
import Watchlog from "./Watchlog";
import Graph from "../Graph/index";
import Watchloglist from "./Watchloglist";

// client/src/Graph/index.js
// import { on } from "cluster";

// import Watchlog from "../Watchlog";
// will need to figure out how to limit the number of entries
// will need to get info from the data base might need to use useEffect or Promise.all (or both)
export default function Profile(props) {
  const [userWatchLogs, setUserWatchLogs] = useState([]); // id, created_at
  const [currentWatchLogId, setCurrentWatchLogId] = useState(null); // currentWatchLogId shouldbe inwatchlog component
  const [showGraph, setShowGraph] = useState(false)
  const [allLogEntries, setAllLogEntries] = useState([])
  const [aggregateExpressions, setAggregateExpressions] = useState([])

console.log("profile", props)
  // Constant



  // SHould be in watchlog component

  useEffect(() => {
    const getAggregateReactionPercentages = (allLogEntries) => {
      const length = allLogEntries.length
      let surprised_percent;
      let disgusted_percent;
      let neutral_percent;
      let sad_percent;
      let fearful_percent;
      let angry_percent;
      let happy_percent;
      for (const logEntry of allLogEntries) {
        surprised_percent += logEntry.surprised_percent
        disgusted_percent += logEntry.disgusted_percent
        neutral_percent += logEntry.neutral_percent
        sad_percent += logEntry.neutral_percent
        fearful_percent += logEntry.fearful_percent
        angry_percent += logEntry.angry_percent
        happy_percent += logEntry.happy_percent
      }
      surprised_percent = surprised_percent / length;
      disgusted_percent = disgusted_percent / length;
      neutral_percent = neutral_percent / length;
      sad_percent = sad_percent / length;
      fearful_percent = fearful_percent / length;
      angry_percent = angry_percent / length;
      happy_percent = happy_percent / length;

      const returnArray = [surprised_percent,
        disgusted_percent,
        neutral_percent,
        sad_percent,
        fearful_percent,
        angry_percent,
        happy_percent]
      console.log("Return Array", returnArray)
      setAggregateExpressions(returnArray)
    }

    Promise.all([
      axios.get(`/api/watch_logs/${props.user.id}`), // 2 = :watch_log id //FIX 
      axios.get(`/api/watch_logs/${props.user.id} /log_entries`), // /api/watch_logs/:watch_log_id/log_entries
    ])
      .then(res => {
        setUserWatchLogs(res[0].data)
        setAllLogEntries(res[1].data)
        console.log(allLogEntries)
        getAggregateReactionPercentages(allLogEntries)
      })

   
      
  }, [])




  const testProps = () => {
    console.log(props);
  };




  //`/api/watch_logs/video/${userID}` // check backend routes


  // 2. Get all log entries for user (so we can do aggregate anaylsis)
  // const getLogEntriesForUser = userID => e => {
  //   e.preventDefault();
  //   return axios({
  //     method: "GET",
  //     url: `/api/watch_logs/${userID}/log_entries/`
  //   }).then(output => {
  //     setLog(output.data);
  //     console.log("get log entries", output)
  //     // const newLogs = [...logs];
  //     // console.log("log: ", newLogs);
  //   });
  // };



  return (
    <section className="profile-container">

      {props.user && <div className="profile-title"><h1>{props.user.username}'s Rabbithole</h1></div>}
      {!currentWatchLogId && <div className="profile_Watchloglist_container">
        <Watchloglist
          userWatchLogs={userWatchLogs}
          setCurrentWatchLogId={setCurrentWatchLogId}
          user={props.user}
        />
      </div>}
      {currentWatchLogId && <div className="Profile_Watchlog_container">
        <Watchlog
          currentWatchLogId={currentWatchLogId}
        //  getLogEntriesForWatchLog={getLogEntriesForWatchLog}
        />
      </div>}
      {!currentWatchLogId && <div className="profile_graph_container">
        <Graph allLogEntries={allLogEntries}
          expressions={aggregateExpressions}
             title={props.user ? props.user.username + " 's Average Reation" : "Average Reaction"}
        />
      </div>}



    </section>
  );
}

//     id: 1
// user_id: 1
// is_public: true
// created_at: "2020-03-23T20:43:25.688Z"
// updated_at: "2020-03-23T20:43:25.688Z"
// video_id: 1
// watch_log_id: 1
// surprised_percent: 10
// disgusted_percent: 10
// neutral_percent: 20
// sad_percent: 10
// fearful_percent: 20
// angry_percent: 30
// happy_percent: 10

// id: 1
// name: "Bob"
// username: "bob111"
// email: "bob111@abc.com"
// password: null
// created_at: "2020-03-23T20:43:25.681Z"
// updated_at: "2020-03-23T20:43:25.681Z"
