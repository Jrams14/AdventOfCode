import fs from "fs";

let treeGrid = fs
  .readFileSync("./2022/Day08/input.txt")
  .toString()
  .split("\n")
  .map((row) => row.split("").map((treeHeight) => parseInt(treeHeight)));

let amountOfVisibleTrees = 0;

for (let row = 0; row < treeGrid.length; row++) {
  for (let col = 0; col < treeGrid[row].length; col++) {
    let currentHeight = treeGrid[row][col];
    if (
      isTreeVisible(currentHeight, -Infinity, row, col, "up") ||
      isTreeVisible(currentHeight, -Infinity, row, col, "down") ||
      isTreeVisible(currentHeight, -Infinity, row, col, "left") ||
      isTreeVisible(currentHeight, -Infinity, row, col, "right")
    ) {
      amountOfVisibleTrees++;
    }
  }
}

function isTreeVisible(
  startingHeight,
  currentHeight,
  row,
  col,
  directionToSearch
) {
  if (startingHeight <= currentHeight) {
    return false;
  }

  if (
    row === 0 ||
    row === treeGrid.length - 1 ||
    col === 0 ||
    col === treeGrid[row].length - 1
  ) {
    return true;
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
    directionToSearch
  );
}

console.log(amountOfVisibleTrees);
