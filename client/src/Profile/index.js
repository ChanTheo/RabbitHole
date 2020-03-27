import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Profile.scss";
import Loglist from "./Loglist";
import Watchlog from "./Watchlog";
import Graph from "../Graph/index";
import Userhistory from "./Userhistory";

// client/src/Graph/index.js
// import { on } from "cluster";

// import Watchlog from "../Watchlog";
// will need to figure out how to limit the number of entries
// will need to get info from the data base might need to use useEffect or Promise.all (or both)
export default function Profile(props) {
  const [userWatchLogs, setUserWatchLogs] = useState([]);
  const [allLogEntries, setAllLogEntries] = useState([]);
  const [showGraph, setShowGraph] = useState(false);

  const getLogEntriesForWatchLog = watchlogid => e => {
    e.preventDefault();
    return axios({
      method: "GET",
      url: `/api/watch_logs/log_entries/${watchlogid}`
    }).then(result => {
      console.log("getlogentriesforWatchlog", result);
    });
  };

  useEffect(() => {
    Promise.all([
      axios.get(`/api/watch_logs/2`),
      axios.get(`/api/watch_logs/2/log_entries`)
    ]).then(res => {
      setUserWatchLogs(res[0].data);
      setAllLogEntries(res[1].data);
    });
  }, []);

  const testProps = () => {
    console.log(props);
  };

  // watchs.map(watch => {
  //   console.log("renderwatchlogs", watch)
  //   return (

  //   )

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
      <h1></h1>

      {props.user && <div className="profile-title">{props.user_name}</div>}
      <div className="profile_watch_logs">
        <Watchlog
          userWatchLogs={userWatchLogs}
          //  getLogEntriesForWatchLog={getLogEntriesForWatchLog}
        />
      </div>
      <div className="empty"></div>
      {showGraph && (
        <div className="profile_aggregate_analysis">
          <Graph allLogEntries={allLogEntries} />
        </div>
      )}
      <Userhistory userWatchLogs={userWatchLogs} />

      {/* {logs.length > 0 ? <Loglist allLogEntries={allLogEntries} />  : <div></div>} */}

      {/* <button onClick={getLogEntriesForUser(3)}>getLogEntriesForUser</button>
      <button onClick={testProps}>TEST props</button>
      <button onClick={getLogEntriesForWatchLog(3)}>TEST getLogEntriesForWatchLog</button> */}
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
