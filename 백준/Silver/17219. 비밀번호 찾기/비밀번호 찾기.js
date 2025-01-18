const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [totalNumber, searchNumber] = input[0].split(" ").map(Number);
const passwordList = new Map();

for (let i = 1; i <= totalNumber; i++) {
  const [address, password] = input[i].split(" ");

  passwordList.set(address, password);
}

for (let i = totalNumber + 1; i <= totalNumber + searchNumber; i++) {
  console.log(passwordList.get(input[i]));
}
