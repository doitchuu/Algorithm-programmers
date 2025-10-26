function solution(arr) {
  return arr.filter((v, i) => i === 0 || v !== arr[i - 1]);
}