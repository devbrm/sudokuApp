import React, { useState, useEffect } from "react";
import { ref } from "../library/firebase";

function Highscores() {
  const [data, setData] = useState([]);

  useEffect(() => {
    ref.once("value").then((snapshot) => {
      const data = snapshot.val();
      const keys = Object.keys(snapshot.val());
      const arr = [];
      keys.forEach((key) => {
        arr.push({
          id: key,
          name: data[key].name,
          time: data[key].time,
          string: data[key].string,
        });
      });

      arr.sort((a, b) => a.time - b.time);
      setData(arr);
    });
  }, []);

  return (
    <section id="highscores">
      <h2>Highscores</h2>
      <p className="heading">
        <span>Name</span>
        <span>score</span>
      </p>
      {data &&
        data.map(({ id, name, string }) => (
          <p key={id} className="score">
            <span>{name}</span>
            <span className="time">{string}</span>
          </p>
        ))}
    </section>
  );
}

export default Highscores;
