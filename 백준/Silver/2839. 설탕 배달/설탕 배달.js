const INPUT_PATH = "./input.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const numberList = input.map(Number);

function solution(input) {
  let count = 0;

  while (input > 0) {
    if (input % 5 === 0) {
      input -= 5;
    } else {
      input -= 3;
    }

    count++;
  }

  return input === 0 ? count : -1;
}

console.log(solution(Number(input)));
