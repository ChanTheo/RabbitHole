import React from "react";
import "./Watchloglistitem.scss";
import { TiZoomIn } from "react-icons/ti";
export default function Watchloglistitem(props) {
  // const { id, user_id, is_public, created_at } = watch;
  // console.log("Watchitem", watch);

  return (
    <div className="Watchloglistitem">
      <div
        className="Watchloglistitem_container"
        onClick={e => props.setCurrentWatchLogId(props.id)}
      >
        <div className="Watchlog_id_and_date">
          <div className="Watchlog_id_date_content">
            <TiZoomIn />
            &nbsp;&nbsp;&nbsp;
            <span className="Watchloglistitem_id">ID: {props.id}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="Watchloglistitem_date">
              Created at: {props.date}
            </span>
          </div>
        </div>
        {/* <div className="HistoryItem_reaction">
        <ol>
  {/* <li> 😐% {}</li>
          <li> 😡%</li>
          <li> 😁%</li>
          <li> 😢%</li>
          <li> 😱%</li>
          <li> 🤢%</li>
          <li>😲%</li> */}
        {/* </ol>
      </div> */}
      </div>
    </div>
  );
}
