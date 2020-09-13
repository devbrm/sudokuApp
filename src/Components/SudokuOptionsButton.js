import React from "react";

function SudokuOptionsButton(props) {
  const { value } = props;
  return <button value={value}>{value}</button>;
}

export default SudokuOptionsButton;
