import React, { useState, useEffect } from "react";
import Time from "./components/time";
import moment from "moment-timezone";
import "./App.css";

const getCurrentTime = () => {
  return moment.tz(new Date(), "GMT");
};

function App() {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const [bgColor, setBgColor] = useState("green");
  const changeColor = () => {
    const hours = currentTime.hours();
    if (hours < 12) {
      setBgColor("green");
    } else {
      setBgColor("blue");
    }
  };

  useEffect(() => {
    changeColor();
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(changeColor, [currentTime]);

  return (
    <div style={{ backgroundColor: bgColor, width: "100%", height: "100%" }}>
      <h1>Dynamic Background React App</h1>
      <Time currentTime={currentTime} />
    </div>
  );
}

export default App;
