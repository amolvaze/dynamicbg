import React from "react";

function Time(props) {
  return <div>Current Time in GMT: {props.currentTime.format("hh:mm:ss")}</div>;
}

export default Time;
