function solution(arr1, arr2) {
    var answer = 0;
    let sumArr1 = 0;
    let sumArr2 = 0;
    
    if (arr1.length > arr2.length) {
        answer = 1;
        
        return answer;
    } else if (arr1.length < arr2.length) {
        answer = -1;
        
        return answer;
    } else {
        for (let i = 0; i < arr1.length; i++) {
            sumArr1 += arr1[i];
            sumArr2 += arr2[i];
        } 
        
        if (sumArr1 > sumArr2) {
            answer = 1;
        } else if (sumArr2 > sumArr1) {
            answer = -1;
        } else {
            answer = 0;
        }
    }

    return answer;
}

//1. 길이 비교, 2가 크면 -1, 1이 더 크면 1 같으면 0
//2. 길이가 같으면 배열 합 다 더해서 2가 크면 -1, 1이 더 크면 1 같으면 0