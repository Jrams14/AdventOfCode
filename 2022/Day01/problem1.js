import fs from "fs";

let maxGroupOfCalories = -Infinity;
let currentGroupOfCalories = 0;

fs.readFileSync("./2022/Day01/input.txt")
  .toString()
  .split("\n")
  .forEach((calorieInGroup) => {
    if (calorieInGroup) {
      currentGroupOfCalories += parseInt(calorieInGroup);
    } else {
      // End of current calorie group
      if (currentGroupOfCalories > maxGroupOfCalories) {
        maxGroupOfCalories = currentGroupOfCalories;
      }
      currentGroupOfCalories = 0;
    }
  });

console.log(maxGroupOfCalories);
