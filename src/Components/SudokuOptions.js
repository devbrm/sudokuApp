import React, { useContext, useState, useEffect } from "react";
import SudokuOptionsButton from "./SudokuOptionsButton";
import { SudokuContext } from "./Sudoku";
import UpdateLocalStorage from "../library/UpdateLocalStorage";

function SudokuOptions() {
  const { state, dispatch } = useContext(SudokuContext);
  const { data } = state;
  const [previousValue, setPreviousValue] = useState("");

  if (!!!localStorage.getItem("sudokuHistory"))
    localStorage.setItem("sudokuHistory", "[]");
  const stateData = JSON.parse(localStorage.getItem("sudokuHistory"));
  const stateDataLength = stateData.length;
  const [count, setCount] = useState(stateDataLength - 1);

  useEffect(() => {
    if (!!!stateData[count]) return;
    const newState = {
      ...state,
      data: stateData[count],
    };
    dispatch({ type: "sudokuFieldModified", payload: newState });
  }, [count]);

  useEffect(() => {
    setCount(stateDataLength - 1);
    if (count + 1 < stateDataLength - 1) {
      const history = JSON.parse(localStorage.getItem("sudokuHistory"));
      const lastItem = history.slice(-1);
      history.splice(count + 1);
      const newHistory = [...history, ...lastItem];
      localStorage.setItem("sudokuHistory", JSON.stringify(newHistory));
    }
  }, [stateDataLength]);

  const handleClick = (e) => {
    if (!e.target.closest("button")) return;
    const { name } = e.target.closest("button");

    switch (name) {
      case "undo": {
        if (count < 0) {
          setCount((prev) => prev + 1);
        } else if (!!stateData[count - 1]) setCount((prev) => prev - 1);
        break;
      }
      case "redo": {
        if (count >= stateDataLength) {
          setCount((prev) => prev - 1);
        } else if (!!stateData[count + 1]) setCount((prev) => prev + 1);
        break;
      }
      case "clear": {
        const { row, col } = state.previousRef;
        const { editable, value } = data[row][col];
        if (value === null) return;
        changeCurrentValue(null, editable);
      }
    }

    //to aviod extra counts if the state is not present
  };

  const handleOptionsClick = (e) => {
    if (!e.target.closest("button")) return;
    let { value } = e.target.closest("button");
    value = Number(value);

    setPreviousValue(value);
    if (previousValue === value) return;

    // state changes
    const { row, col } = state.previousRef;
    const { editable } = data[row][col];
    changeCurrentValue(value, editable);
  };

  const changeCurrentValue = (value, isNoteditable) => {
    if (isNoteditable) return;

    const { row, col } = state.previousRef;
    const { editable, id } = data[row][col];

    const newObj = {
      row,
      col,
      value,
      id: Number(id),
      editable,
    };

    data[row][col] = newObj;
    if (!!!state.startTime) state.startTime = Date.now();
    UpdateLocalStorage(data, editable);
    dispatch({ type: "sudokuFieldModified", payload: { ...state } });
  };

  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="options-comtainer">
      <div className="undo-redo" onClick={handleClick}>
        <button name="undo">
          <i className="fas fa-2x fa-angle-left"></i>
        </button>
        <button name="redo">
          <i className="fas fa-2x fa-angle-right"></i>
        </button>
        <button name="clear">
          <i className="fas fa-2x  fa-backspace"></i>
        </button>
      </div>
      <div className="options">
        <div onClick={handleOptionsClick} className="primary-options">
          {options.map((item, index) => (
            <SudokuOptionsButton key={index} value={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SudokuOptions;
