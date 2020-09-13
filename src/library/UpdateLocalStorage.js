const UpdateLocalStorage = (newData) => {
  //managing localstorage for the state
  const history = JSON.parse(localStorage.getItem("sudokuHistory"));
  if (!history || history.length < 1) {
    localStorage.setItem("sudokuHistory", JSON.stringify([newData]));
  } else {
    history.push(newData);
    localStorage.setItem("sudokuHistory", JSON.stringify(history));
  }
};

export default UpdateLocalStorage;
