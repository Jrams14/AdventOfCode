import fs from "fs";

let itemPrioritySum = 0;

const test = fs
  .readFileSync("./2022/Day03/input.txt")
  .toString()
  .split("\n")
  .forEach((ruckSack) => {
    let compartmentOne = [...ruckSack].slice(0, ruckSack.length / 2);
    let compartmentTwo = [...ruckSack].slice(ruckSack.length / 2);

    let duplicateItemType = compartmentOne.find(
      (itemType) => compartmentTwo.indexOf(itemType) !== -1
    );

    if (duplicateItemType) {
      itemPrioritySum += findItemTypePriority(duplicateItemType);
    }
  });

function findItemTypePriority(itemType) {
  const offset = itemType === itemType.toUpperCase() ? 38 : 96;
  return itemType.charCodeAt(0) - offset;
}

console.log(itemPrioritySum);
