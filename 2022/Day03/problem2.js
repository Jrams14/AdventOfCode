import fs from "fs";

let itemPrioritySum = 0;
let currentGroupRuckSacks = [];

const test = fs
  .readFileSync("./2022/Day03/input.txt")
  .toString()
  .split("\n")
  .forEach((ruckSack) => {
    if (currentGroupRuckSacks.length === 2) {
      // We have now reached a full group of 3
      currentGroupRuckSacks.push([...ruckSack]);

      let duplicateItemType = currentGroupRuckSacks[0].find(
        (itemType) =>
          currentGroupRuckSacks[1].indexOf(itemType) !== -1 &&
          currentGroupRuckSacks[2].indexOf(itemType) !== -1
      );

      if (duplicateItemType) {
        itemPrioritySum += findItemTypePriority(duplicateItemType);
      }

      // Reset current group
      currentGroupRuckSacks = [];
    } else {
      currentGroupRuckSacks.push([...ruckSack]);
    }
  });

function findItemTypePriority(itemType) {
  const offset = itemType === itemType.toUpperCase() ? 38 : 96;
  return itemType.charCodeAt(0) - offset;
}

console.log(itemPrioritySum);
