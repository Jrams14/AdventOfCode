import fs from "fs";

let head = {
  x: 0,
  y: 0,
};

let tail = {
  x: 0,
  y: 0,
};

let knots = Array.from(new Array(10), (x) => {
  return { x: 0, y: 0 };
});

console.log(knots);
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
    knots[0].y = direction === "U" ? ++knots[0].y : --knots[0].y;
  } else {
    knots[0].x = direction === "L" ? --knots[0].x : ++knots[0].x;
  }

  for (let i = 0; i < knots.length - 1; i++) {
    let head = knots[i];
    let tail = knots[i + 1];
    if (isTailOutOfDistance(head, tail)) {
      let xDifference = head.x - tail.x;
      let yDifference = head.y - tail.y;

      tail.x += xDifference > 0 ? 1 : xDifference < 0 ? -1 : 0;
      tail.y += yDifference > 0 ? 1 : yDifference < 0 ? -1 : 0;
      if (i === 8) {
        tailVisitedCords.add(tail.x.toString() + " " + tail.y.toString());
      }
    }
  }
}

function isTailOutOfDistance(head, tail) {
  return Math.abs(head.x - tail.x) > 1 || Math.abs(head.y - tail.y) > 1;
}

console.log(tailVisitedCords.size);
