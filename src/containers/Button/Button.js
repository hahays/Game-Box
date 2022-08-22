import React from "react";
// import classNames from "classnames";
import "./Button.css";

export const Button = ({ onClick, text }) => {
  return (
    <button className="game-button" onClick={onClick}>
      {text}
    </button>
  );
};
