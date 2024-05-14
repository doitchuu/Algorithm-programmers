function solution(arr) {
  let results = [...arr];
  
  if (arr.length < arr[0].length) {
    const newArray = new Array(arr[0].length).fill(0);
    
    for (let i = 0; i < arr[0].length - arr.length; i++) {
    results.push(newArray);
    }
    
    return results;
  } else if (results.length > arr[0].length) {
    const difference = results.length - arr[0].length;
    
    for (let i = 0; i < results.length; i++) {
      const newArray = new Array(difference).fill(0);
      
      results[i] = results[i].concat(newArray);
    }
  }
  
  return results;
}