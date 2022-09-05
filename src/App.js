import "./App.css";
import React, { useState } from "react";
import Board from "./components/Board";
import "./components/style/root.scss";
import { calculateWinner } from "./components/heapers";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXnext, setISXNext] = useState(false);

  const winner = calculateWinner(board);

  const message = winner
    ? `winner is ${winner}`
    : `Next player is ${isXnext ? "X" : "O"}`;
  const handleSquarClick = (position) => {
    if (board[position] || winner) {
      return;
    }
    setBoard((prev) => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isXnext ? "X" : "O";
        }

        return square;
      });
    });
    setISXNext((prev) => !prev);
  };
  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Board handleSquarClick={handleSquarClick} board={board} />
    </div>
  );
}

export default App;
