function solution(arr, idx) {
    var answer = 0;
    
    for (let i = idx; i < arr.length; i++) {
        if (arr[i] >= 1) {
            answer = i;
            
            return answer;
        } else {
            answer = - 1;
        }
    } return answer;
}