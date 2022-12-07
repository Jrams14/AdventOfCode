import fs from "fs";

let data = fs.readFileSync("./2022/Day06/input.txt").toString();

const lengthOfMarker = 4;

function findMarkerIndex() {
  for (let i = lengthOfMarker; i < data.length; i++) {
    let markerSet = new Set([...data.slice(i - lengthOfMarker, i)]);
    if (markerSet.size === lengthOfMarker) {
      return i;
    }
  }
}

console.log(findMarkerIndex());
