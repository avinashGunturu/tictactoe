import React from "react";

const StatusMessage = ({ winner, current }) => {
  // const message = winner
  // ? `winner is ${winner}`
  // : `Next player is ${current.isXnext ? "X" : "O"}`;
  const noMOvesLeft = current.board.every((el) => el !== null);
  return (
    <h2>
      {winner && `winner is ${winner}`}
      {!winner &&
        !noMOvesLeft &&
        `Next player is ${current.isXnext ? "X" : "O"}`}
      {!winner && noMOvesLeft && "X and O tied"}
    </h2>
  );
};

export default StatusMessage;
