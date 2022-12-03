import fs from "fs";

// X = lose = 0
// Y = draw = 3
// Z = win = 6
const roundtoPlayerTwoScoreMap = new Map([
  ["A X", 3],
  ["A Y", 4],
  ["A Z", 8],
  ["B X", 1],
  ["B Y", 5],
  ["B Z", 9],
  ["C X", 2],
  ["C Y", 6],
  ["C Z", 7],
]);

const totalScore = fs
  .readFileSync("./2022/Day02/input.txt")
  .toString()
  .split("\n")
  .reduce(
    (accumulatingScoreValue, currentRound) =>
      (accumulatingScoreValue += roundtoPlayerTwoScoreMap.get(currentRound)),
    0
  );

console.log(totalScore);
