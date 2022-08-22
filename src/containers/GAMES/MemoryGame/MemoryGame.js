import React, { useEffect } from "react";
import start from "./gameLogic";
import "./MemoryGame.css";

function MemoryGame({ id, gameStarted = false }) {
  useEffect(() => {
    if (gameStarted) {
      return start();
    }
  }, [gameStarted, start]);
  return (
    <div key={id} className="game-container">
      <div id="grid-memory"></div>
    </div>
  );
}

export default MemoryGame;
