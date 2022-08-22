import React, { useEffect } from "react";
import start from "./gameLogic";
import "./SpaceInvaders.css";

function SpaceInvaders({ id, gameStarted = false, onGameLost }) {
  useEffect(() => {
    if (gameStarted) {
      return start(onGameLost);
    }
  }, [gameStarted, start]);
  return (
    <div key={id} className="game-container">
      <div className="grid-space-invaders"></div>
    </div>
  );
}

export default SpaceInvaders;
