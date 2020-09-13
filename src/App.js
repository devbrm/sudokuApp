import React from "react";
import "./css/App.css";
import Menu from "./Components/Menu";

function App() {
  const toggleMenu = (e) => {
    const hamIcon = document.querySelector(".ham-icon");
    const menu = document.querySelector("#menu nav");
    if (e.target === hamIcon) menu.classList.toggle("toggleElement");
    else if (e.target.parentElement === menu) return;
    else menu.classList.remove("toggleElement");
  };
  return (
    <div onClick={toggleMenu} className="App">
      <div className="ham-icon"></div>
      <Menu />
    </div>
  );
}

export default App;
