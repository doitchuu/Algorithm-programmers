function solution(arr) {
    const answer = [];
    
    for (let i = 0; i < arr.length; i++) {
        const elem = arr[i];
      for (let j = 0; j < elem; j++) {
        answer.push(elem);
      }
    }
    
    return answer;
}