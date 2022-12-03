import fs from "fs";

const roundtoPlayerTwoScoreMap = new Map([
  ["A X", 4],
  ["A Y", 8],
  ["A Z", 3],
  ["B X", 1],
  ["B Y", 5],
  ["B Z", 9],
  ["C X", 7],
  ["C Y", 2],
  ["C Z", 6],
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
