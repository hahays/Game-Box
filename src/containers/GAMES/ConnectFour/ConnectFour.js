import React, { useEffect } from "react";
import start from "./gameLogic";
import "./ConnectFour.css";

function ConnectFour(id, gameStarted = false, onGameLost) {
  useEffect(() => {
    if (gameStarted) {
      return start(onGameLost);
    }
  }, [gameStarted, start]);
  return (
    <div key={id} className="game-container">
      <div class="grid-connect-four">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div class="taken"></div>
        <div class="taken"></div>
        <div class="taken"></div>
        <div class="taken"></div>
        <div class="taken"></div>
        <div class="taken"></div>
        <div class="taken"></div>
      </div>
    </div>
  );
}

export default ConnectFour;
