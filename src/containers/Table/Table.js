import React from "react";
import "./Table.css";

function Table({ id, score = 0 }) {
  return (
    <div className="box-score">
      <div className="result">TABLE</div>
      <div key={id} id="score">
        {score}
      </div>
    </div>
  );
}

export default Table;
