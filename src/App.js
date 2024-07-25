import React, { useState } from "react";
import "./index.css";
import { ihandleValidSudoku, solveSudoku } from "./SudokuValidation";
import Sudoku from "./Sudoku";

const App = () => {
  const [sudokuGrid, setSudokuGrid] = useState(Array(9).fill(Array(9).fill(0)));
  const [message, setMessage] = useState("");

  const handleValidate = () => {
    if (ihandleValidSudoku(sudokuGrid)) {
      setMessage("The Sudoku puzzle is valid.");
    } else {
      setMessage("The Sudoku puzzle is invalid.");
    }
  };

  const handleSolve = () => {
    if (ihandleValidSudoku(sudokuGrid)) {
      const solvedGrid = solveSudoku(sudokuGrid);
      setSudokuGrid(solvedGrid);
      setMessage("The Sudoku puzzle has been solved.");
    } else {
      setMessage("Cannot solve an invalid Sudoku puzzle.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-4">Sudoku Solver</h1>
      <Sudoku sudokuGrid={sudokuGrid} setSudokuGrid={setSudokuGrid} />
      <div className="mt-4">
        <button
          onClick={handleValidate}
          className="bg-blue-500 text-white px-4 py-2 m-2 rounded"
        >
          Validate
        </button>
        <button
          onClick={handleSolve}
          className="bg-green-500 text-white px-4 py-2 m-2 rounded"
        >
          Solve
        </button>
      </div>
      {message && <p className="text-red-500 mt-4">{message}</p>}
    </div>
  );
};

export default App;
