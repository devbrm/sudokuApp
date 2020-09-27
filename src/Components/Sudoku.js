import React, { useState, useEffect, useReducer } from "react";
import { makepuzzle, solvepuzzle } from "sudoku";
import SudokuBoard from "./SudokuBoard";
import "../css/Sudoku.css";
import SudokuOptions from "./SudokuOptions";
import Timer from "./Timer";
import solCheck from "../library/solCheck";
import Winning from "./Winning";
import getTimeString from "../library/getTimeString";
import { ref } from "../library/firebase";

export const SudokuContext = React.createContext();

function Sudoku() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "onload": {
        return action.payload;
      }
      case "modifications": {
        return { ...action.payload };
      }
      case "sudokuFieldModified": {
        return { ...action.payload };
      }
      case "refupdated": {
        return (state = action.payload);
      }
      default:
        return state;
    }
  };

  const [currentPuzzle, setcurrentPuzzle] = useState([]);
  const [solution, setSolution] = useState([]);
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, {});
  const [loaded, setLoaded] = useState(false);

  const getMap = () => {
    const puzzle = currentPuzzle.map((x) => (x === null ? x : x + 1));
    const map = {
      puzzle,
      isSolved: false,
      data: makeMap(puzzle),
      solution,
      previousRef: { row: 0, col: 0 },
    };
    return map;
  };

  //Mapping of the sudoku
  const makeMap = (arr) => {
    const obj = [];
    for (let i = 0; i < 9; i++) {
      if (!obj[i]) obj[i] = [];
      for (let j = 0; j < 9; j++) {
        const value = arr[i * 9 + j];
        obj[i].push({
          row: i,
          col: j,
          value,
          id: i * 9 + j,
          editable: value !== null,
        });
      }
    }
    return obj;
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("sudokuHistory")).length > 0)
      popUpForTheOldGame();
    else {
      setcurrentPuzzle(makepuzzle());
      const sudokuRoot = {
        puzzle: [],
        timer: { startTime: 0, endTime: 0 },
      };
      localStorage.setItem("sudokuRoot", JSON.stringify(sudokuRoot));
    }
  }, []);

  useEffect(() => {
    if (currentPuzzle.length > 0)
      setSolution(solvepuzzle(currentPuzzle).map((x) => x + 1));
    dispatch({ type: "onload", payload: getMap() });
    setLoaded(true);
  }, [currentPuzzle]);

  useEffect(() => {
    dispatch({ type: "onload", payload: getMap() });
    let s = 0;
    let e = 0;

    if (JSON.parse(localStorage.getItem("sudokuRoot")).timer) {
      const { startTime, endTime } = JSON.parse(
        localStorage.getItem("sudokuRoot")
      ).timer;
      s = startTime;
      e = endTime;
    }

    const sudokuRoot = {
      puzzle: state.puzzle,
      timer: { startTime: s, endTime: e },
    };
    localStorage.setItem("sudokuRoot", JSON.stringify(sudokuRoot));
  }, [solution]);

  useEffect(() => {
    if (solCheck(state)) {
      state.isSolved = true;
      dispatch({ type: "modifications", payload: state });
    }
  }, [state]);

  useEffect(() => {
    localStorage.setItem("playerName", JSON.stringify(name));

    if (state.isSolved) {
      const { startTime, endTime } = JSON.parse(
        localStorage.getItem("sudokuRoot")
      ).timer;

      const time = endTime - startTime;
      const string = getTimeString((endTime - startTime) / 1000);

      if (!!name.length) {
        setName(new Date().toLocaleString().split(",")[1].trim());
      }

      ref.push({ name, time, string });
    }
  }, [state.isSolved]);

  const popUpForTheOldGame = () => {
    if (window.confirm("Previous game found \n keep it ?")) {
      const { puzzle } = JSON.parse(localStorage.getItem("sudokuRoot"));
      const newPuzzle = puzzle.map((x) => (x === null ? x : x - 1));
      setcurrentPuzzle(newPuzzle);
      setSolution(solvepuzzle(newPuzzle).map((x) => x + 1));
      document.querySelector(".popup").classList.add("display");
      setTimeout(() => {
        document.querySelector(".popup").classList.remove("display");
      }, 5000);
    } else {
      localStorage.setItem("sudokuHistory", "[]");
      const sudokuRoot = {
        puzzle: [],
        timer: { startTime: 0, endTime: 0 },
      };
      localStorage.setItem("sudokuRoot", JSON.stringify(sudokuRoot));
      setcurrentPuzzle(makepuzzle());
    }
  };

  let t;
  const handleNameChange = (e) => {
    const { value } = e.target;

    if (value.match(/[^a-z\s\d]/gi)) {
      const input = document.querySelector(".player-name");
      input.classList.add("invalid");
      if (t) clearTimeout(t);

      t = setTimeout(() => {
        input.classList.remove("invalid");
      }, 1500);
      return;
    }

    setName(value);
  };

  return (
    <section id="sudoku-container">
      <header>
        <div className="popup">
          Press the back button once to get previous data.
        </div>
        <h1>Sudoku Online</h1>
        <div className="header-links-container">
          <span>
            <a href="https://devbrm.github.io/portfolio/" target="_blank">
              <i className="fas fa-2x fa-globe-asia"></i>
            </a>
          </span>
          <span>
            <a href="https://github.com/devbrm" target="_blank">
              <i className="fab fa-2x fa-github"></i>
            </a>
          </span>
          <span>
            <a href="https://www.linkedin.com/in/devbrm/" target="_blank">
              <i className="fab fa-2x fa-linkedin"></i>
            </a>
          </span>
        </div>
        <p>Made with ❤ by Braham Prakash</p>
      </header>
      <SudokuContext.Provider value={{ state, dispatch }}>
        <main>
          {state.isSolved ? (
            <Winning />
          ) : (
            <>
              <div className="quote">
                A great research says, if you solve one sudoku every day, then after a year you would
                have solved more than hundred sudokus !
              </div>

              <div className="sudokuContainer">
                <div className="sudoku">
                  {loaded &&
                    state.data.map((data, index) => (
                      <SudokuBoard key={data[index].row} data={data} />
                    ))}
                </div>
              </div>
              {state.startTime ? (
                <Timer />
              ) : (
                <div className="time">00 : 00</div>
              )}
              <input
                className="player-name"
                type="text"
                onChange={handleNameChange}
                placeholder="Put Champion's name here"
                value={name}
              ></input>
              <SudokuOptions />
            </>
          )}
        </main>
      </SudokuContext.Provider>
      <footer>
        <div>&copy; braham prakash 2020 </div>
      </footer>
    </section>
  );
}
export default React.memo(Sudoku);
