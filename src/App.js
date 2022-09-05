import "./App.css";
import React, { useState } from "react";
import Board from "./components/Board";
import History from "./components/History";

import "./components/style/root.scss";
import { calculateWinner } from "./components/heapers";

function App() {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isXnext: true },
  ]);
  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];

  const winner = calculateWinner(current.board);

  const message = winner
    ? `winner is ${winner}`
    : `Next player is ${current.isXnext ? "X" : "O"}`;

  const handleSquarClick = (position) => {
    if (current.board[position] || winner) {
      return;
    }
    setHistory((prev) => {
      const last = prev[prev.length - 1];

      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXnext ? "X" : "O";
        }

        return square;
      });
      return prev.concat({ board: newBoard, isXnext: !last.isXnext });
    });
    setCurrentMove((prev) => prev + 1);
  };

  const moveTo = (move) => {
    setCurrentMove(move);
  };
  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Board handleSquarClick={handleSquarClick} board={current.board} />
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
}

export default App;
