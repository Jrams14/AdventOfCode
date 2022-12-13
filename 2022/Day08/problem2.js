import fs from "fs";

let treeGrid = fs
  .readFileSync("./2022/Day08/input.txt")
  .toString()
  .split("\n")
  .map((row) => row.split("").map((treeHeight) => parseInt(treeHeight)));

let highestScore = -Infinity;

for (let row = 0; row < treeGrid.length; row++) {
  for (let col = 0; col < treeGrid[row].length; col++) {
    let currentHeight = treeGrid[row][col];
    let score =
      isTreeVisible(currentHeight, -Infinity, row, col, "up", 0) *
      isTreeVisible(currentHeight, -Infinity, row, col, "down", 0) *
      isTreeVisible(currentHeight, -Infinity, row, col, "left", 0) *
      isTreeVisible(currentHeight, -Infinity, row, col, "right", 0);
    highestScore = score > highestScore ? score : highestScore;
  }
}

function isTreeVisible(
  startingHeight,
  currentHeight,
  row,
  col,
  directionToSearch,
  currentScore
) {
  if (startingHeight <= currentHeight) {
    return currentScore;
  }

  if (
    row === 0 ||
    row === treeGrid.length - 1 ||
    col === 0 ||
    col === treeGrid[row].length - 1
  ) {
    return currentScore;
  }

  let newRow;
  let newCol;
  if (directionToSearch === "up" || directionToSearch === "down") {
    [newRow, newCol] =
      directionToSearch === "up" ? [row - 1, col] : [row + 1, col];
  } else {
    [newRow, newCol] =
      directionToSearch === "left" ? [row, col - 1] : [row, col + 1];
  }

  return isTreeVisible(
    startingHeight,
    treeGrid[newRow][newCol],
    newRow,
    newCol,
    directionToSearch,
    ++currentScore
  );
}

console.log(highestScore);
