function solution(arr, query) {
  let array = [...arr];
  
  for (let i = 0; i < query.length; i++) {
    const index = query[i];
    
    if (i % 2 === 0) {
      array.splice(index + 1);
      
      continue;
    }
    
    array = array.slice(index, array.length);
  }
  
  return array;
}