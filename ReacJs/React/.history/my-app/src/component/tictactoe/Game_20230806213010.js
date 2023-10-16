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
      const nextState = JSON.parse(JSON.) 
      return nextState
      break;

    default:
      break;
  }
  return state;
};

const Game = () => {
  // cách tạo nhiều state
  // const [board, setBoard] = useState(Array(9).fill(null));
  // const [xIsNext, setXisNext] = useState(true);
  // const winner = calculateWinner(board);

  // cách gộp nhiều state
  // const [state, setState] = useState({
  //   board: Array(9).fill(null),
  //   xIsNext: true,
  // });

  // cách tạo bằng USEREDUCER
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const winner = calculateWinner(state.board);
  const handleClick = (index) => {
    const boardCopy = [...state.board];
    if (winner || boardCopy[index]) return;
    // khởi tạo dispathc của USEREDUCER
    dispatch({
      type: "CLICK",
      payload: {
        index,
      },
    });
    // boardCopy[index] = state.xIsNext ? "X" : "O";
    // set theo từng state
    // setBoard(boardCopy);
    // setXisNext((xIsNext) => !xIsNext);

    // set theo 1 state gồm nhiều state con
    // setState({
    //   ...state,
    //   board: boardCopy,
    //   xIsNext: !state.xIsNext,
    // });
  };
  const handleResetGame = () => {
    // setState({
    //   ...state,
    //   board: Array(9).fill(null),
    // });
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
