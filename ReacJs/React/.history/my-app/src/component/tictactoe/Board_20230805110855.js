import React from "react";
import Cell from "./Cell";
import { calculateWinner } from "../../helper";

const Board = (props) => {
  return (
    <div className="game-board">
      {
        props.cells.map((item, index) => (
          <Cell key={index} value ={items}></Cell>
        ))}
    </div>
  );
};

export default Board;
