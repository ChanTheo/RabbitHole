import React from "react";
import Watchitem from "./Watchitem";
import axios from "axios"

export default function Watchlog(props) {
  console.log("Watchlog", props);
// useEffect 



  return (
    <div className="Watchlogs_container">
      <div className="Watchlog_container">
        <div className="Watchlog_date">
          
        </div>
        <ul className="Watchlog_entries">
          
        </ul>

      </div>
      
    </div>
  );
}
