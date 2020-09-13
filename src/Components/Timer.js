import React, { useState, useEffect, useContext } from "react";
import getTimeString from "../library/getTimeString";
import { SudokuContext } from "./Sudoku";

function Timer() {
  const { state } = useContext(SudokuContext);
  const [time, setTime] = useState(0);
  const { puzzle, timer } = JSON.parse(localStorage.getItem("sudokuRoot"));

  const obj = { puzzle, timer: { startTime: Date.now() } };

  useEffect(() => {
    const t = setInterval(() => {
      setTime((Date.now() - state.startTime) / 1000);
      obj.timer.endTime = Date.now();
      localStorage.setItem("sudokuRoot", JSON.stringify(obj));
    }, 1000);
    return () => {
      clearInterval(t);
    };
  }, []);

  return <div className="time">{getTimeString(time)}</div>;
}

export default Timer;
