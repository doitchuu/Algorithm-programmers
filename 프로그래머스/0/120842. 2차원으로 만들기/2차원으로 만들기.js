function solution(num_list, n) {
  const numberList = [...num_list];
  const numberOfArray = Math.floor(numberList.length / n);
  let newArrays = [];

  for (let i = 0; i < numberOfArray; i++) {
    newArrays.push(numberList.slice(i * n, i * n + n));
  }
  
  return newArrays;
}