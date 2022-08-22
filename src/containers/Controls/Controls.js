import React from "react";
import "./Controls.css";

function Controls() {
  return (
    <div className="game-tutorial  ">
      <p className="game-tutorial-title">CONTROLS</p>
      <div className="game-tutorial-name">
        <div className="game-tutorial-name-left">
          <i className="left"></i> move LEFT
        </div>
        <div className="game-tutorial-name-right">
          <i className="right"></i> move RIGHT
        </div>
        <div className="game-tutorial-name-up">
          <i className="up"></i> FIRE/move UP
        </div>
        <div className="game-tutorial-name-up">
          <i className="down"></i> move DOWN
        </div>
        <div className="game-tutorial-name-start">
          press <span className="start">START</span> to play
        </div>
        <div className="game-tutorial-name-return">
          <span className="back">BACK</span> to main menu
        </div>
      </div>
    </div>
  );
}

export default Controls;
