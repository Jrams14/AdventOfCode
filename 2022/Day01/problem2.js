import fs from "fs";

let calorieGroups = [];
let currentGroupOfCalories = 0;

fs.readFileSync("./2022/Day01/input.txt")
  .toString()
  .split("\n")
  .forEach((calorieInGroup) => {
    if (calorieInGroup) {
      currentGroupOfCalories += parseInt(calorieInGroup);
    } else {
      // End of current calorie group
      calorieGroups.push(currentGroupOfCalories);
      currentGroupOfCalories = 0;
    }
  });

console.log(
  calorieGroups
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce(
      (calorieAccumulation, currentCalorieGroup) =>
        (calorieAccumulation += currentCalorieGroup),
      0
    )
);
