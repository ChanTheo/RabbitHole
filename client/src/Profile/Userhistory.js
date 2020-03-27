import React from "react";
import Watchitem from "./Watchitem";
import axios from "axios"

export default function Userhistory (props) {
  
// console.log("userhisotry", props)
  const formatDate = (date) => {
    const dateArray = date.split("T")
    const minHourSeconds = dateArray[1].split(".")
    console.log("dateArray[0]", dateArray[0])
    console.log("dateArray[1]", minHourSeconds)



    return `${minHourSeconds} - ${dateArray[0]}` 
    
  }
  // 2020-03-26T19:32:39.699Z

// useEffect 



  

  return (
    <div className="Userhistory_container">
        <div className="Watchlog_date">
          
        </div>
    </div>
  );
}