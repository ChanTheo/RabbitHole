import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Profile.scss";
import Loglist from "./Loglist";
// import { on } from "cluster";

// import Watchlog from "../Watchlog";
// will need to figure out how to limit the number of entries
// will need to get info from the data base might need to use useEffect or Promise.all (or both)
export default function Profile(props) {
  const testProps = () => {
    console.log(props);
  };

  //`/api/watch_logs/video/${userID}` // check backend routes

  // TO DO: write DB helpers

  // 1. Get all WatchLog's for user
  const getWatchLogsForUser = userID => e => {
    e.preventDefault();

    return axios({
      method: "GET",
      url: `/api/watch_logs/${userID}` // check backend routes
    }).then(result => {
      console.log(result);
    });
  };

  let a = null;
  // 2. Get all log entries for user (so we can do aggregate anaylsis)

  // props.user to get user info

  const [logs, setLog] = useState([]);

  const getLogEntriesForUser = userID => e => {
    e.preventDefault();
    return axios({
      method: "GET",
      url: `/api/watch_logs/log_entries/${userID}`
    }).then(output => {
      setLog(output.data);
      const newLogs = [...logs];
      console.log("log: ", newLogs);
    });
  };

  return (
    <section className="profile-container">
      <h1></h1>
      <div className="profile-container">
        <div className="profile-title">User Profile</div>
        <div className="profile_watch_logs">{/* <Watchlog /> */}</div>
      </div>
      <div className="empty"></div>
      <div className="profile_aggregate_analysis"></div>

      {logs.length > 0 ? <Loglist logs={logs} /> : <div></div>}
      <button onClick={getLogEntriesForUser(3)}>getLogEntriesForUser</button>
      <button onClick={testProps}>TEST props</button>
      <button onClick={getWatchLogsForUser(3)}>TEST WatchLog</button>
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
