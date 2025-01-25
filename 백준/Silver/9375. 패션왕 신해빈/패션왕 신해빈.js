const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const testCases = Number(input[0]);
let index = 1;

for (let i = 1; i <= testCases; i++) {
  console.log(countToCodeClothes(index));
  index += Number(input[index]) + 1;
}

function countToCodeClothes(order) {
  const newClothes = new Map();
  const numberOfClothes = Number(input[order]);
  let combinations = 1;

  for (let i = order + 1; i <= order + numberOfClothes; i++) {
    const clothes = input[i].split(" ");
    const key = clothes[1];

    if (newClothes.has(key)) {
      newClothes.set(key, newClothes.get(key) + 1);
    } else {
      newClothes.set(key, 1);
    }
  }

  for (const count of newClothes.values()) {
    combinations *= count + 1;
  }

  return combinations - 1;
}
