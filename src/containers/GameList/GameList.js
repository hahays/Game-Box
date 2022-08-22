import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentGame } from "../../redux/games/reducer";
import GameCover from "../GameCover/GameCover";
import "./GameList.css";

function GameList({ game }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setCurrentGame(game));
    navigate(`/app/${game.title}`);
  };
  return (
    <div className="game-item" onClick={handleClick}>
      <GameCover image={game.image} />
    </div>
  );
}

export default GameList;
