import React from "react";
import SudokuField from "./SudokuField";

function SudokuBoard(props) {
  const { data } = props;
  return (
    <div className="rows">
      {data.map((item, index) => (
        <SudokuField
          key={data[index].col}
          editable={item.editable}
          value={item.value}
          id={item.id}
          row={item.row}
          col={item.col}
        />
      ))}
    </div>
  );
}

export default SudokuBoard;
