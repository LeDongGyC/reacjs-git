import React from "react";

const Cell = ({value,onClick}) => {
  return (
    <div className="game-cell" onClick=.onClick}>
      {props.value}
    </div>
  );
};

export default Cell;
