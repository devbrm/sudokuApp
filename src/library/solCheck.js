const solCheck = (state) => {
  const { data, solution } = state;
  if (!!!solution || !!!solution.length) return;

  const puzzle = data.flat().map((x) => x.value);
  if (puzzle.some((x) => typeof x !== "number")) return false;
  else {
    return puzzle.every((x, i) => puzzle[i] === solution[i]);
  }
};

export default solCheck;
