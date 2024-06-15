const INPUT_PATH = "./input.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const numberList = input.map(Number);

const cashes = {
  0: [1, 0],
  1: [0, 1],
};

function fibonacci(num) {
  if (num === 0) {
    return cashes[num];
  }

  if (num === 1) {
    return cashes[num];
  }

  if (cashes[num]) {
    return cashes[num];
  }

  const [twoBeforeZero, twoBeforeOne] = fibonacci(num - 2);
  const [beforeZero, beforeOne] = fibonacci(num - 1);

  return (cashes[num] = [twoBeforeZero + beforeZero, twoBeforeOne + beforeOne]);
}

for (let i = 1; i < numberList.length; i++) {
  const [zeroCount, oneCount] = fibonacci(numberList[i]);

  console.log(zeroCount + " " + oneCount);
}
