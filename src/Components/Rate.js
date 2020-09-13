import React from "react";
import { db } from "../library/firebase";

function Rate() {
  const handleClick = (e) => {
    if (!!!e.target.closest("span")) return;

    const name = JSON.parse(localStorage.getItem("playerName"));
    const rating = e.target.closest("span").children[0].textContent;
    console.log(name, rating);

    db.ref("ratings").push({ name, rating });

  };
  return (
    <section id="rate">
      <div onClick={handleClick} className="emojis-container">
        How was yor experience?
        <span value="bad">
          😔<p>bad</p>
        </span>
        <span value="ok">
          🙂<p>ok</p>
        </span>
        <span value="good">
          😊<p>good</p>
        </span>
        <span value="awesome">
          🤩<p>awesome</p>
        </span>
        <span value="fantastic">
          😍<p>fantastic</p>
        </span>
        <span value="Infinite">
          💖<p>loved</p>
        </span>
      </div>
    </section>
  );
}

export default Rate;
