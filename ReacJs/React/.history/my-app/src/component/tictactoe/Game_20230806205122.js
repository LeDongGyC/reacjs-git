import React, { useState } from "react";
import Board from "./Board";
import "./GameStyles.css";
import { calculateWinner } from "../../helper";
const initialState = {
  board: Array(9).fill(null),
    xIsNext: true,
}
const Game = () => {
  // const [board, setBoard] = useState(Array(9).fill(null));
  // const [xIsNext, setXisNext] = useState(true);
  const [state, dispa]
  const [state, setState] = useState({
    board: Array(9).fill(null),
    xIsNext: true,
  });
  // const winner = calculateWinner(board);
  const winner = calculateWinner(state.board);
  const handleClick = (index) => {
    const boardCopy = [...state.board];
    if (winner || boardCopy[index]) return;
    boardCopy[index] = state.xIsNext ? "X" : "O";
    // setBoard(boardCopy);
    // setXisNext((xIsNext) => !xIsNext);
    setState({
      ...state,
      board: boardCopy,
      xIsNext: !state.xIsNext,
    });
  };
  const handleResetGame = () => {
    setState({
      ...state,
      board: Array(9).fill(null),
    });
  };
  return (
    <div>
      <Board cells={state.board} onClick={handleClick}></Board>
      {winner && <div className="game-winner">{`Winner  is ${winner}`}</div>}
      <button onClick={handleResetGame} className="game-reset">
        Reset Game
      </button>
    </div>
  );
};

export default Game;
