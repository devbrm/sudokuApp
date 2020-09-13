import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Sudoku from "./Sudoku";
import HowToPlay from "./HowToPlay";
import Highscores from "./Highscores";
import Rate from "./Rate";

function Menu() {
  return (
    <Router>
      <section id="menu">
        <nav>
          <h2>
            <Link to="/how-to-play">How to Play</Link>
          </h2>
          <h2>
            <Link to="/sudokuApp">Play</Link>
          </h2>
          <h2>
            <Link to="/highscores">view highscores</Link>
          </h2>
          <h2>
            <Link to="/rate">Rate it!</Link>
          </h2>
          <h2>
            <a href="https://devbrm.github.io/portfolio/" target="_blank">
              Visit Developer's site
            </a>
          </h2>
          <div className="links-container">
            <span>
              <a href="https://devbrm.github.io/portfolio/" target="_blank">
                <i className="fas fa-3x fa-globe-asia"></i>
              </a>
            </span>
            <span>
              <a href="https://github.com/devbrm" target="_blank">
                <i className="fab fa-3x fa-github"></i>
              </a>
            </span>
            <span>
              <a href="https://www.linkedin.com/in/devbrm/" target="_blank">
                <i className="fab fa-3x fa-linkedin"></i>
              </a>
            </span>
          </div>
        </nav>
      </section>
      <Switch>
        <Route path="/sudokuApp" exact component={Sudoku} />
        <Route path="/" exact component={Sudoku} />
        <Route path="/how-to-play" exact component={HowToPlay} />
        <Route path="/highscores" exact component={Highscores} />
        <Route path="/rate" exact component={Rate} />
      </Switch>
    </Router>
  );
}

export default Menu;
