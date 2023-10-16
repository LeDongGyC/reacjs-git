import React from "react";

const Cell = ({ value, onClick, pro}) => {
  return (
    <div className="game-cell" onClick={onClick}>
      {value}
    </div>
  );
};

export default Cell;
