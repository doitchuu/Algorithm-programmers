function solution(data, col, row_begin, row_end) {
  const sortedData = data.sort((a, b) => {
    if (a[col - 1] === b[col - 1]) {
      return b[0] - a[0];
    }
    
    return a[col - 1] - b[col - 1];
  });
  const list = [];
    
  for (let i = row_begin; i <= row_end; i++) {
    let accumulation = 0;
    
    for (let j = 0; j < sortedData[i - 1].length; j++) {
      accumulation += sortedData[i - 1][j] % i;
    }
    
    list.push(accumulation);
  }
  
  return list.reduce((acc, cur) => acc ^ cur, 0);
}
