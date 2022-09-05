import React from "react";

const StatusMessage = ({ winner, current }) => {
  // const message = winner
  // ? `winner is ${winner}`
  // : `Next player is ${current.isXnext ? "X" : "O"}`;
  const noMOvesLeft = current.board.every((el) => el !== null);
  return (
    <div className="status-message">
      {winner && (
        <>
          winner is{" "}
          <span className={winner === "X" ? "text-green" : "text-orange"}>
            {winner}
          </span>
        </>
      )}
      {!winner && !noMOvesLeft && (
        <>
          Next player is{" "}
          <span className={current.isXnext ? "text-green" : "text-orange"}>
            {" "}
            {current.isXnext ? "X" : "O"}
          </span>
        </>
      )}
      {!winner && noMOvesLeft && (
        <>
          <span className="text-green">X </span>
          and
          <span className="text-orange"> O </span>
          tied
        </>
      )}
    </div>
  );
};

export default StatusMessage;
