import React from "react";
import GameList from "../../GameList/GameList";
import GAMES from "../../../constants/gameList";

import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="home-page">
      {GAMES.map((game) => (
        <GameList game={game} key={game.id} />
      ))}
    </div>
  );
}
