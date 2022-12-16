import fs from "fs";

let head = {
  x: 0,
  y: 0,
};

let tail = {
  x: 0,
  y: 0,
};

let tailVisitedCords = new Set(["0 0"]);

const instructions = fs
  .readFileSync("./2022/Day09/input.txt")
  .toString()
  .split("\n")
  .forEach((instruction) => {
    let [direction, numOfMoves] = instruction.split(" ");
    for (let i = 0; i < parseInt(numOfMoves); i++) {
      moveHead(direction);
    }
  });

function moveHead(direction) {
  if (direction === "U" || direction == "D") {
    head.y = direction === "U" ? head.y + 1 : head.y - 1;
    if (isTailOutOfDistance()) {
      // Move tail
      tail.x = head.x;
      tail.y = direction === "U" ? head.y - 1 : head.y + 1;

      tailVisitedCords.add(tail.x.toString() + " " + tail.y.toString());
    }
  } else {
    head.x = direction === "L" ? head.x - 1 : head.x + 1;
    if (isTailOutOfDistance()) {
      // Move tail
      tail.y = head.y;
      tail.x = direction === "R" ? head.x - 1 : head.x + 1;

      tailVisitedCords.add(tail.x.toString() + " " + tail.y.toString());
    }
  }
}

function isTailOutOfDistance() {
  return Math.abs(head.x - tail.x) > 1 || Math.abs(head.y - tail.y) > 1;
}

console.log(tailVisitedCords.size);
