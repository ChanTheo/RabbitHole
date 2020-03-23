import React from "react";

export default function Line ({left}) {
  return (
    <div className="line"
    style={{left: `${left}%`}}
    />
  )
}