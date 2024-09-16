const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const allPeople = Number(input[0]);
const shirtsSizes = input[1].split(" ").map(Number);
const basicNumbers = input[2].split(" ").map(Number);
let shirtsCount = 0;

for (let i = 0; i < shirtsSizes.length; i++) {
  shirtsCount += Math.ceil(shirtsSizes[i] / basicNumbers[0]);
}

console.log(shirtsCount);
console.log(
  Math.floor(allPeople / basicNumbers[1]),
  allPeople % basicNumbers[1]
);
