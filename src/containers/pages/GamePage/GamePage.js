import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import GAMES from "../../../constants/gameList";
import { Button } from "../../Button/Button";
import Controls from "../../Controls/Controls";
import Breakout from "../../GAMES/Breakout/Breakout";
import ConnectFour from "../../GAMES/ConnectFour/ConnectFour";
import Frogger from "../../GAMES/Frogger/Frogger";
import MemoryGame from "../../GAMES/MemoryGame/MemoryGame";
import Snake from "../../GAMES/Snake/Snake";
import SpaceInvaders from "../../GAMES/SpaceInvaders/SpaceInvaders";
import Loader from "../../Loader/Loader";
import Table from "../../Table/Table";
import "./GamePage.css";

function GamePage() {
  const [gameIsStarted, setGameIsStarted] = useState(false);
  const [gameKey, setGameKey] = useState("");

  const { title } = useParams();
  console.log(title);

  const setRandomGameKey = () => {
    setGameKey(Math.random());
  };

  const onGameLost = () => {
    setGameIsStarted(false);
  };

  const toogleStart = () => {
    setGameIsStarted(!gameIsStarted);
    setRandomGameKey();
  };

  const game = GAMES.find((gameItem) => gameItem.title === title);

  function titleCome(game) {
    switch (game.title) {
      case "BreakOut":
        return (
          <Breakout
            id={gameKey}
            gameStarted={gameIsStarted}
            onGameLost={onGameLost}
          />
        );
      case "ConnectFour":
        return (
          <ConnectFour
            id={gameKey}
            gameStarted={gameIsStarted}
            onGameLost={onGameLost}
          />
        );
      case "Frogger":
        return (
          <Frogger
            id={gameKey}
            gameStarted={gameIsStarted}
            onGameLost={onGameLost}
          />
        );
      case "Snake":
        return (
          <Snake
            id={gameKey}
            gameStarted={gameIsStarted}
            onGameLost={onGameLost}
          />
        );
      case "MemoryGame":
        return <MemoryGame id={gameKey} gameStarted={gameIsStarted} />;
      case "SpaceInvaders":
        return (
          <SpaceInvaders
            id={gameKey}
            gameStarted={gameIsStarted}
            onGameLost={onGameLost}
          />
        );
    }
  }

  if (!game) return null;
  return (
    <div className="game-page ">
      <div className="left-page">
        <Table />
      </div>
      <div className="center-page">
        <h1 className="game-page-title">{game.title}</h1>
        {gameIsStarted ? titleCome(game) : <Loader />}
      </div>
      <div className="right-page">
        <Controls />
        <div className="game-buttons">
          <Button onClick={toogleStart} text="START" />
          <div className="return-button">
            <Link to="/">
              <Button text="BACK" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GamePage;
