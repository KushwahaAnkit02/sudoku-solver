import React from "react";

const Sudoku = ({ sudokuGrid, setSudokuGrid }) => {
  const handleChange = (row, col, value) => {
    const newGrid = sudokuGrid.map((val, rowIndex) =>
      val.map((cell, colIndex) =>
        rowIndex === row && colIndex === col ? Number(value) : cell
      )
    );
    setSudokuGrid(newGrid);
  };

  return (
    <div className="grid grid-cols-9 gap-1">
      {sudokuGrid.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <input
            key={`${rowIndex}+${colIndex}`}
            type="number"
            value={cell === 0 ? "" : cell}
            onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
            min="1"
            max="9"
            className="w-10 h-10 text-center border border-gray-300"
          />
        ))
      )}
    </div>
  );
};

export default Sudoku;
