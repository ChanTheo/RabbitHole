import React from "react";
import Logentry from "./Logentry";

export default function Loglist({ logs }) {
  console.log("Loglist:", logs); // ok

  console.log("Loglist:", logs[0]); //undefined

  return (
    <div>
      
    {/* //     ? logs.map(log => <Logitem key={log.id} log={log} />)
    //     : ""}
    //   <p>{test}</p> */}
    </div>
  );
}
