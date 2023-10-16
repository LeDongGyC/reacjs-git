import React, { useReducer, useState } from "react";
import Board from "./Board";
import "./GameStyles.css";
import { calculateWinner } from "../../helper";
const initialState = {
  board: Array(9).fill(null),
  xIsNext: true,
};
const gameReducer = (state, action) => {
  switch (action.type) {
    case "CLICK":
      console.log("hello");
      break;

    default:
      break;
  }
  return state;
};
const Game = () => {
  // const [board, setBoard] = useState(Array(9).fill(null));
  // const [xIsNext, setXisNext] = useState(true);
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const action = {};
  // const [state, setState] = useState({
  //   board: Array(9).fill(null),
  //   xIsNext: true,
  // });
  // const winner = calculateWinner(board);
  const winner = calculateWinner(state.board);
  const handleClick = (index) => {
    const boardCopy = [...state.board];
    if (winner || boardCopy[index]) return;
    // cách làm bằng useReducer
    dispatch({
      type: "CLICK",
      payload: {
        index,
      },
    });
    // boardCopy[index] = state.xIsNext ? "X" : "O";

    // cách làm tạo từng useState
    // setBoard(boardCopy);
    // setXisNext((xIsNext) => !xIsNext);

    // cách tạo 1 useState gồm nhiều useState
    //   setState({
    //     ...state,
    //     board: boardCopy,
    //     xIsNext: !state.xIsNext,
    //   });
    // };
    const handleResetGame = () => {
      // setState({
      //   ...state,
      //   board: Array(9).fill(null),
      // });
      log
    };
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
