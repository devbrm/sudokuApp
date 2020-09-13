import React, { useContext, useRef, useState } from "react";
import { SudokuContext } from "./Sudoku";
import UpdateLocalStorage from "../library/UpdateLocalStorage";

function SudokuField(props) {
  const { state, dispatch } = useContext(SudokuContext);
  const { row, col, value, editable, id } = props;
  const inputRef = useRef(null);
  const [previousValue, setPreviousValue] = useState("");

  let t;
  const handleChange = (e) => {
    let { id, readOnly } = e.target;
    let value = e.target.value.slice(-1);
    //validation and animations
    if (value.match(/[\D0]/gi) || readOnly) {
      inputRef.current.classList.add("warning");
      if (t) clearTimeout(t);

      t = setTimeout(() => {
        inputRef.current.classList.remove("warning");
      }, 400);

      return;
    }

    //check if the currnet value is also the previos value
    setPreviousValue(value);
    if (previousValue === value) return;

    //state changes
    const { data } = state;

    value = Number(value);
    const newObj = {
      row,
      col,
      value,
      id: Number(id),
      editable,
    };

    data[row][col] = newObj;
    UpdateLocalStorage(data);

    dispatch({ type: "sudokuFieldModified", payload: state });
  };

  const handleClick = () => {
    if (!!!state.startTime) {
      const { startTime, endTime } = JSON.parse(
        localStorage.getItem("sudokuRoot")
      ).timer;

      if (startTime || endTime) {
        state.startTime = Math.abs(endTime - startTime - Date.now());
      } else state.startTime = Date.now();
    }

    const newState = {
      ...state,
      previousRef: { ref: inputRef.current, row, col },
    };
    dispatch({ type: "refupdated", payload: newState });
  };

  return (
    <>
      <input
        ref={inputRef}
        id={id}
        type="text"
        className="fields"
        readOnly={editable}
        onClick={handleClick}
        onChange={handleChange}
        value={value || ""}
      ></input>
    </>
  );
}

export default SudokuField;
