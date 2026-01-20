function solution(triangle) {
  const n = triangle.length;

  for (let r = 1; r < n; r++) {
    for (let c = 0; c <= r; c++) {
      if (c === 0) {
        triangle[r][c] += triangle[r - 1][c];
      } else if (c === r) {
        triangle[r][c] += triangle[r - 1][c - 1];
      } else {
        const a = triangle[r - 1][c - 1];
        const b = triangle[r - 1][c];
        triangle[r][c] += (a > b ? a : b);
      }
    }
  }

  let ans = 0;
  for (let c = 0; c < triangle[n - 1].length; c++) {
    if (triangle[n - 1][c] > ans) ans = triangle[n - 1][c];
  }
  return ans;
}