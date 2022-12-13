import fs from "fs";

class Directory {
  files = [];
  children = new Map();

  constructor(name, parentDirectory) {
    this.name = name;
    this.parent = parentDirectory;
  }

  calculateSize() {
    let fileSizes = this.files.reduce(
      (totalFileSizeAccum, currentFile) =>
        totalFileSizeAccum + currentFile.size,
      0
    );
    let childDirectoriesSizes = Array.from(this.children.values()).reduce(
      (totalDirectorySizeAccum, currentDirectory) =>
        totalDirectorySizeAccum + currentDirectory.calculateSize(),
      0
    );

    let totalSize = fileSizes + childDirectoriesSizes;

    if (totalSize <= maxDirectorySizeAllowed) {
      directorySizeAccumulation += totalSize;
    }

    return totalSize;
  }
}

class File {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
}

let rootDirectory = new Directory("/");
let currentDirectory = rootDirectory;

// Create file directory tree
fs.readFileSync("./2022/Day07/input.txt")
  .toString()
  .split("\n")
  .forEach((input) => {
    let [a, b, c] = input.split(" ");

    if (a === "$") {
      if (b === "cd") {
        if (c === "..") {
          currentDirectory = currentDirectory.parent;
        } else {
          if (c != "/") {
            currentDirectory = currentDirectory.children.get(c);
          }
        }
      }
    } else if (a === "dir") {
      currentDirectory.children.set(b, new Directory(b, currentDirectory));
    } else {
      currentDirectory.files.push(new File(b, parseInt(a)));
    }
  });

const maxDirectorySizeAllowed = 100000;
let directorySizeAccumulation = 0;
rootDirectory.calculateSize();

console.log(directorySizeAccumulation);
