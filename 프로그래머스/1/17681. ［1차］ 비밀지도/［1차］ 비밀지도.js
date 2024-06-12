function solution(n, arr1, arr2) {
  const answer = new Array(n).fill("");
  const array1  = arr1.map((number) => number.toString(2).padStart(n, 0));
  const array2 = arr2.map((number) => number.toString(2).padStart(n, 0));
  
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array1[i].length; j++) {
      if (Number(array1[i][j]) === 1|| Number(array2[i][j]) === 1) {
        answer[i] += "#";
        
        continue;
      }
      
      answer[i] += " ";
    }
  }
  
  return answer;
}
