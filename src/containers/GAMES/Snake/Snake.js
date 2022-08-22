import React, { useEffect } from "react";
import start from "./gameLogic";
import "./Snake.css";

function Snake({ id, gameStarted = false, onGameLost }) {
  useEffect(() => {
    if (gameStarted) {
      return start(onGameLost);
    }
  }, [gameStarted, start]);
  return (
    <div key={id} className="game-container">
      <div className="grid-snake"></div>
    </div>
  );
}

export default Snake;
