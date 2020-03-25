import React, { useState } from "react";
import axios from "axios";
import "./Profile.scss";

// import Watchlog from "../Watchlog";
// will need to figure out how to limit the number of entries
// will need to get info from the data base might need to use useEffect or Promise.all (or both)
export default function Profile(props) {
  // const renderHistory = userID => {
  //   return axios({
  //     method: "GET",
  //     url: ""
  //   }).then(result => console.log(result));
  // };

  // id: 1
  // name: "Bob"
  // username: "bob111"
  // email: "bob111@abc.com"
  // password: null
  // created_at: "2020-03-23T20:43:25.681Z"
  // updated_at: "2020-03-23T20:43:25.681Z"

  const testProps = () => {
    console.log(props);
  };

  //`/api/watch_logs/video/${userID}` // check backend routes

  // TO DO: write DB helpers

  // 1. Get all WatchLog's for user
  const getWatchLogsForUser = userID => {
    userID = 1;
    return axios({
      method: "GET",
      url: `/api/watch_logs/${userID}` // check backend routes
    }).then(result => {
      console.log(result);
    });
  };
  // 2. Get all log entries for user (so we can do aggregate anaylsis)

  // props.user to get user info

  const userInfo = dataObject => {
    // name = dataObject.name;
    // userName = dataObject.username;
    // email = dataObject.email;
    // password = dataObject.password;
    // date = dataObject.created_at;
    // console.log(date);
  };

  const userInfoFromDatabase = e => {
    e.preventDefault();
    return axios({
      method: "GET"
      // url: `/api/users/${userId}`
    }).then(output => {
      console.log(output.data[0]);
      userInfo(output.data[0]);
    });
  };

  return (
    <section className="profile-container">
      <h1></h1>
      <div className="profile-container">
        <div className="profile-title">User Profile</div>
        <div className="empty"></div>
        <div className="profile_watch_logs">{/* <Watchlog /> */}</div>
        <div className="empty"></div>
      </div>

      <div className="profile_aggregate_analysis"></div>

      <button onClick={userInfoFromDatabase}>TEST</button>
      <button onClick={testProps}>TEST props</button>
      <button onClick={getWatchLogsForUser}>TEST WatchLog</button>
    </section>
  );
}
