import React, { useState, useEffect } from "react";

import Line from "./Line";
import BarContent from "./BarContent";
import Bar from "./Bar";
import "./Bargraph.scss";
// import "./BarContent.scss";

export default function Bargraph(props) {
  console.log("bargraph", props);

  const renderLines = () => {
    return Array(10)
      .fill(null)
      .map((el, i) => <Line left={i * 10} key={i} />);
  };
  // need to get the props
  const renderBars = () => {
    let expressionArray = [];
    for (const expression in props.expressions) {
      expressionArray.push(props.expressions[expression]);
    }
    expressionArray.map(percentage => {
      return <Bar percentage={percentage} />;
    });
  };

  return (
    <section className="graph_wrapper">
      <div className="graph">
        <BarContent />

        <div className="bar_lines_container">{renderLines()}</div>
        <div className="bars_container">{renderBars()}</div>
      </div>
    </section>
  );
}
