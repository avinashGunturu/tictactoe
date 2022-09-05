import React from "react";

const Square = ({ value, onClick, isWinningSquare }) => {
  return (
    <button
      className="square"
      onClick={onClick}
      style={{ fontWeight: isWinningSquare ? "bold" : "normal" }}
    >
      {value}
    </button>
  );
};

export default Square;
