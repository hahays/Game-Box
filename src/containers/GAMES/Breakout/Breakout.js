import React, { useEffect } from "react";
import start from "./gameLogic";
import "./Breakout.css";

function Breakout({ id, gameStarted = false, onGameLost }) {
  useEffect(() => {
    if (gameStarted) {
      return start(onGameLost);
    }
  }, [gameStarted, start]);

  return (
    <div key={id} className="game-container ">
      <div className="grid-break-out " />
    </div>
  );
}

export default Breakout;
