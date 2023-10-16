import React from "react";

const Cell = (props) => {
  const 
  return (
    <div className="game-cell" onClick={props.onClick}>
      {props.value}
    </div>
  );
};

export default Cell;
