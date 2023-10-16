import React, { useState } from "react";
import Board from "./Board";
import "./GameStyles.css";
import { calculateWinner } from "../../helper";
const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winer = calculateWinner(board);
  const handleClick = (a) => {
    console.log(a);
    const boardCopy = [...board];
    if (winer || boardCopy[a]) return;
    boardCopy[a] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext((xIsNext) => !xIsNext);
  };
  const handleResetGame = () => {
    setBoard(Array(9).fill(null));
  };
  return (
    <div>
      <Board cells={board} onClick={handleClick}></Board>
      <button onClick={handleResetGame}>Reset Game</button>
    </div>
  );
};

export default Game;
