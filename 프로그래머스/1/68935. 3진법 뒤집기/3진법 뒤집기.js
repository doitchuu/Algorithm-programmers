function solution(n) {
  const NumberToTernary = n.toString(3).split("").reverse().join("");
  
  return parseInt(NumberToTernary, 3);
}