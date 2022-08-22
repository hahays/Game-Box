import React, { useEffect } from "react";
import start from "./gameLogic";
import "./ConnectFour.css";

function ConnectFour(id, gameStarted = false) {
  useEffect(() => {
    if (gameStarted) {
      return start();
    }
  }, [gameStarted, start]);
  return (
    <div className="game-container">
      <div key={id} class="grid-connect-four">
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
