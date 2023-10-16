import React from "react";

const Cell = ({ value, onClick, this.props.}) => {
  return (
    <div className="game-cell" onClick={onClick}>
      {value}
    </div>
  );
};

export default Cell;
