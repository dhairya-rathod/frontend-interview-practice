import { useEffect } from "react";
import { useState } from "react";

// 1 = circle, 2 = cross
const defaultState = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const TickTackToe = () => {
  const [board, setBoard] = useState(structuredClone(defaultState));
  const [isCircle, setIsCircle] = useState(true);
  const [winner, setSetWinner] = useState("");

  const handleChange = (row, col) => {
    const newBoard = [...board];
    newBoard[row][col] = isCircle ? 1 : 2;
    setBoard(newBoard);
    setIsCircle((val) => !val);
  };

  const handleReset = () => {
    setSetWinner("");
    setIsCircle(true);
    setBoard(structuredClone(defaultState));
  };

  useEffect(() => {
    // check row
    for (let row = 0; row < board.length; row++) {
      if (
        board[row][0] == board[row][1] &&
        board[row][1] == board[row][2] &&
        board[row][2] !== ""
      ) {
        setSetWinner(board[row][0] === 1 ? "Circle" : "Cross");
        break;
      }
    }

    // check column
    for (let row = 0; row < board.length; row++) {
      if (
        board[0][row] == board[1][row] &&
        board[1][row] == board[2][row] &&
        board[2][row] !== ""
      ) {
        setSetWinner(board[0][row] === 1 ? "Circle" : "Cross");
        break;
      }
    }

    // check diagonal
    for (let row = 0; row < 1; row++) {
      if (
        board[0][row] == board[1][row + 1] &&
        board[1][row + 1] == board[2][row + 2] &&
        board[2][row + 2] !== ""
      ) {
        setSetWinner(board[0][row] === 1 ? "Circle" : "Cross");
        break;
      }
      if (
        board[0][row + 2] == board[1][row + 1] &&
        board[1][row + 1] == board[2][row] &&
        board[2][row] !== ""
      ) {
        setSetWinner(board[0][row + 2] === 1 ? "Circle" : "Cross");
        break;
      }
    }
  }, [board]);

  return (
    <section className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-col gap-2 ">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-2">
            {row.map((_, colIndex) => (
              <div
                className="px-4 py-2 w-10 flex justify-center"
                key={colIndex}
                onClick={() => {
                  handleChange(rowIndex, colIndex);
                }}
              >
                {board[rowIndex][colIndex] === 1 ? (
                  <span>&#9711;</span>
                ) : board[rowIndex][colIndex] === 2 ? (
                  <span>&#9587;</span>
                ) : (
                  <span>&#8414;</span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      {winner && <span>Winner: {winner}</span>}
      {winner && (
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      )}
    </section>
  );
};

export default TickTackToe;
