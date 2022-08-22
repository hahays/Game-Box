import React, { useEffect } from "react";
import start from "./gameLogic";
import "./Frogger.css";

function Frogger({ id, gameStarted = false, onGameLost }) {
  useEffect(() => {
    if (gameStarted) {
      return start(onGameLost);
    }
  }, [gameStarted, start]);
  return (
    <div className="game-container" key={id}>
      <div class="grid-frogger">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div class="ending-block"></div>
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
        <div class="log-left l1"></div>
        <div class="log-left l2"></div>
        <div class="log-left l3"></div>
        <div class="log-left l4"></div>
        <div class="log-left l5"></div>
        <div class="log-left l1"></div>
        <div class="log-left l2"></div>
        <div class="log-left l3"></div>
        <div class="log-left l4"></div>
        <div class="log-right l5"></div>
        <div class="log-right l1"></div>
        <div class="log-right l2"></div>
        <div class="log-right l3"></div>
        <div class="log-right l4"></div>
        <div class="log-right l5"></div>
        <div class="log-right l1"></div>
        <div class="log-right l2"></div>
        <div class="log-right l3"></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div class="car-left c1"></div>
        <div class="car-left c2"></div>
        <div class="car-left c3"></div>
        <div class="car-left c1"></div>
        <div class="car-left c2"></div>
        <div class="car-left c3"></div>
        <div class="car-left c1"></div>
        <div class="car-left c2"></div>
        <div class="car-left c3"></div>
        <div class="car-right c1"></div>
        <div class="car-right c2"></div>
        <div class="car-right c3"></div>
        <div class="car-right c1"></div>
        <div class="car-right c2"></div>
        <div class="car-right c3"></div>
        <div class="car-right c1"></div>
        <div class="car-right c2"></div>
        <div class="car-right c3"></div>
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
        <div class="starting-block frog"></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Frogger;
