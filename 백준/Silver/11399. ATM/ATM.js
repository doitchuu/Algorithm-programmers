const INPUT_PATH = "./input.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let result = 0;
const orderList = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

orderList.reduce((acc, cur) => {
  result += acc + cur;

  return acc + cur;
}, 0);

console.log(result);
