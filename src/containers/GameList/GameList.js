import React from "react";
import { useNavigate } from "react-router-dom";
import GameCover from "../GameCover/GameCover";
import "./GameList.css";

function GameList({ game }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/app/${game.title}`);
  };
  return (
    <div className="game-item" onClick={handleClick}>
      <GameCover image={game.image} />
    </div>
  );
}

export default GameList;
