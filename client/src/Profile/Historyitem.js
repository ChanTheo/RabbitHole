import React from "react";

export default function Historyitem(props) {
  // const { id, user_id, is_public, created_at } = watch;
  // console.log("Watchitem", watch);
 

  
  return (
    <div className="HistoryItem_container">
      <div className="HistoryItem_date">
        {props.date}
      </div>
      <div className="HistoryItem_reaction">
        <ol>
  <li> 😐% {}</li>
          <li> 😡%</li>
          <li> 😁%</li>
          <li> 😢%</li>
          <li> 😱%</li>
          <li> 🤢%</li>
          <li>😲%</li>
        </ol>
      </div>
    </div>
  );
}

// id: 5
// user_id: 3
// is_public: true
// created_at: "2020-03-26T01:40:25.709Z"
// updated_at: "2020-03-26T01:40:25.709Z"
// __proto__: Object
