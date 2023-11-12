function solution(arr) {
    let answer = [];
    let criteria = arr[0];

    if (arr.length < 2) {
        answer.push(-1);
        return answer;
    }

    for (let i = 0; i < arr.length; i++) {
        if (criteria > arr[i]) {
            criteria = arr[i];
        } 
    }
    
    for (let i = 0; i < arr.length; i++) 
        if(arr[i] !== criteria) {
            answer.push(arr[i]);
        }
    
    return answer;
}