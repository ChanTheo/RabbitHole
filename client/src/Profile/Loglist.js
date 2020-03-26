import React from "react";
import Logitem from "./Logitem";

export default function Loglist({ logs }) {
  console.log("Loglist:", logs); // ok

  console.log("Loglist:", logs[0]); //undefined

  return (
    <div>
      {logs.length > 0
        ? logs.map(log => <Logitem key={log.id} log={log} />)
        : ""}
      {/* <p>{test}</p> */}
    </div>
  );
}

// {/* {logs.length > 0 ? logs.map(log => <li>{log.user_id}</li>) : ""}
// <p>{test}</p> */}
