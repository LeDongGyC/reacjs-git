import React from "react";

const Cell = (props) => {
  const { value, onClick } = props;
  console.log();
  return (
    <div className="game-cell" onClick={props.onClick}>
      {props.value}
    </div>
  );
};

export default Cell;
