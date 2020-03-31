import React from "react";
import Watchloglistitem from "./Watchloglistitem";
import axios from "axios";
import "./Watchloglist.scss";

export default function Watchloglist(props) {
  const formatDate = date => {
    const dateArray = date.split("T");
    const minHourSeconds1 = dateArray[1].split(".");
    const minHourSeconds2 = minHourSeconds1[0].split(":");
    return `${minHourSeconds2[0]}:${minHourSeconds2[1]} - ${dateArray[0]}`;
  };
  const renderWatchloglist = userWatchLogs => {
    const elements = userWatchLogs.map(watchLog => {
      return (
        <Watchloglistitem
          id={watchLog.id}
          date={formatDate(watchLog.created_at)}
          setCurrentWatchLogId={props.setCurrentWatchLogId}
        />
      );
    });
    return elements;
  };

  // useEffect

  return (
    <div className="Userhistory_container">
      <h2 className="Watchloglist_title">History</h2>
      <div className="Watchlog_date">
        {renderWatchloglist(props.userWatchLogs)}
      </div>
    </div>
  );
}
