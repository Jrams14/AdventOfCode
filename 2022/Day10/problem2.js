import fs from "fs";

let registerX = 1;
let cycle = 0;
let imageArray = Array.from(new Array(6), () => "");
let currentPixelArray = 0;
fs.readFileSync("./2022/Day10/input.txt")
  .toString()
  .split("\n")
  .forEach((instruction) => {
    let [paramA, paramB] = instruction.split(" ");
    if (paramA === "noop") {
      draw();
      advanceCycle();
    } else {
      draw();
      advanceCycle();
      draw();
      advanceCycle();
      registerX += parseInt(paramB);
    }
  });

function draw() {
  let pixel = Math.abs(cycle - registerX) < 2 ? "#" : ".";
  imageArray[currentPixelArray] += pixel;
}

function advanceCycle() {
  cycle++;
  if (cycle === 40) {
    cycle = 0;
    currentPixelArray++;
  }
}

imageArray.forEach((pixelRow) => console.log(pixelRow));
