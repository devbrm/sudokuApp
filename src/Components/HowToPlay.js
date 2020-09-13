import React from "react";

function HowToPlay() {
  return (
    <section id="how-to-play">
      <h2>How to play Sudoku</h2>
      <p>
        Sudoku is an interesting and engaging puzzle game. It is also quite
        popular in the world today because the rules that govern it are simple
        to learn and understand. With a little bit of thinking, focus, and
        patience, you can arrive at the solution when solving Sudoku. There’s no
        need for guesswork!
      </p>
      <p>
        The goal of Sudoku is to fill in a 9×9 grid with digits so that each
        column, row, and 3×3 section contain the numbers between 1 to 9. At the
        beginning of the game, the 9×9 grid will have some of the squares filled
        in. Your job is to use logic to fill in the missing digits and complete
        the grid. Don’t forget, a move is correct if:
      </p>

      <ul>
        <li>Every row should contain digits 1 to 9 without reapeating</li>
        <li>
          Every column should also contain digits 1 to 9 without reapeating
        </li>
        <li>
          Any 3×3 grid should not contain more than one of the same number from
          1 to 9
        </li>
      </ul>
      <div className="video-container">
      <h2>Here are few tutorials</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/OtKxtvMUahA"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/URHZiLu1-LI"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default HowToPlay;
