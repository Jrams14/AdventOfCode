import fs from "fs";

let registerX = 1;
let cycle = 0;
const IMPORTANT_CYCLES = [20, 60, 100, 140, 180, 220];
let sum = 0;

fs.readFileSync("./2022/Day10/input.txt")
  .toString()
  .split("\n")
  .forEach((instruction) => {
    let [paramA, paramB] = instruction.split(" ");
    if (paramA === "noop") {
      cycle++;
    } else {
      cycle++;
      checkCycle();
      cycle++;
      registerX += parseInt(paramB);
    }

    checkCycle();
  });

function checkCycle() {
  if (IMPORTANT_CYCLES.indexOf(cycle) != -1) {
    sum += cycle * registerX;
  }
}

console.log(sum);
