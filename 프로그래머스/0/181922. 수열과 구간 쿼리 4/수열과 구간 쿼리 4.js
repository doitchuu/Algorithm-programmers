function solution(arr, queries) {
  for (i = 0; i < queries.length; i++) {
    let [s, e, k] = queries[i];
      
    for (j = s; j <= e; j++) {
      if (j % k === 0) {
        arr[j]++;
      }
    }
  }
    
  return arr;
}