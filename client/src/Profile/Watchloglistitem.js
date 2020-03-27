import React from "react";

export default function Watchloglistitem(props) {
  // const { id, user_id, is_public, created_at } = watch;
  // console.log("Watchitem", watch);
  

  
  return (
    <div className="Watchloglistitem_container"
    onClick={e => props.setCurrentWatchLogId(props.id)}
    >

      <div className="Watchloglistitem_date">
       Created at: {props.date}
      </div>
      <div className="Watchloglistitem_id">
        ID: {props.id}
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
      </div> */} */}
    </div>
  );
}
