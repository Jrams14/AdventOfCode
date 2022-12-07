import fs from "fs";

let crates = [];
let instructions = [];

let inputData = fs
  .readFileSync("./2022/Day05/input.txt")
  .toString()
  .split("\n");

populateCratesFromData(inputData);
parseInstructions(inputData);
reassignCratesFromInstructions();
console.log(getCratesFromTop());

function reassignCratesFromInstructions() {
  instructions.forEach((instruction) => {
    let [numberToRemove, groupToRemoveFrom, groupToAddTo] = instruction;

    for (let i = 0; i < numberToRemove; i++) {
      crates[groupToAddTo].push(crates[groupToRemoveFrom].pop());
    }
  });
}

function getCratesFromTop() {
  return crates.reduce(
    (topCrates, currentCrateGroup) => (topCrates += currentCrateGroup.pop()),
    ""
  );
}

function populateCratesFromData(inputData) {
  // Crate data format: [N].[X].....[A]..etc
  // Each crate group consists of 4 spaces
  inputData.slice(0, inputData.indexOf("") - 1).forEach((crateData) => {
    crateData = crateData.replaceAll("[", " ").replaceAll("]", " ");

    for (let i = 0; i < crateData.length; i++) {
      if (crateData[i] && crateData[i] != " ") {
        let crateNumber = Math.ceil(i / 4);
        if (!crates[crateNumber]) {
          crates[crateNumber] = [];
        }

        crates[crateNumber].unshift(crateData[i]);
      }
    }
  });
}

function parseInstructions(inputData) {
  inputData.slice(inputData.indexOf("") + 1).forEach((instructionData) => {
    instructions.push(
      instructionData
        .replaceAll("move", "")
        .replaceAll("from", "|")
        .replaceAll("to", "|")
        .replaceAll(" ", "")
        .split("|")
        .map((digitString) => parseInt(digitString))
    );
  });
}
