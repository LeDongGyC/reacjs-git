import React, { useState } from "react";
import Board from "./Board";
import "./GameStyles.css";
import { calculateWinner } from "../../helper";
const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winer = calculateWinner(board);
  const handleClick = (index) => {
    const boardCopy = [...board];
    if (winer || boardCopy[index]) return;
    boardCopy[index] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };
  const handleResetGame = () 
  return (
    <div>
      <Board cells={board} onClick={handleClick}></Board>
      <button onClick={handleResetGame}></button>
    </div>
  );
};

export default Game;
