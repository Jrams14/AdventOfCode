import fs from "fs";

let amountofPairsWithOverlap = 0;

const totalScore = fs
  .readFileSync("./2022/Day04/input.txt")
  .toString()
  .split("\n")
  .forEach((elfPair) => {
    // 2-8, 3-7;
    let [elfOneSections, elfTwoSections] = elfPair.split(",");
    let [elfOneSectionStart, elfOneSectionEnd] = elfOneSections
      .split("-")
      .map((elfSection) => parseInt(elfSection));
    let [elfTwoSectionStart, elfTwoSectionEnd] = elfTwoSections
      .split("-")
      .map((elfSection) => parseInt(elfSection));

    if (
      (elfOneSectionStart <= elfTwoSectionStart &&
        elfOneSectionEnd >= elfTwoSectionEnd) ||
      (elfOneSectionStart >= elfTwoSectionStart &&
        elfOneSectionEnd <= elfTwoSectionEnd)
    ) {
      amountofPairsWithOverlap++;
    }
  });

console.log(amountofPairsWithOverlap);
