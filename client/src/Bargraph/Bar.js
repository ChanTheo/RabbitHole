import React from "react";

export default function Bar ({percent}) {
 return <div className="bar" style={{width: `${percent}%`}} />
}