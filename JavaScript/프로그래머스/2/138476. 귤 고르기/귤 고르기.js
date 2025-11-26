function solution(k, tangerine) {
    let NumOfTangerine = k;
    let result = 0;
    let obj = {};
    
    // 갯수 세주기
    for (const num of tangerine) {
        obj[num] ? obj[num]++ : obj[num] = 1;
    }
    
    // 갯수 많은 순으로 정렬 후, K개에서 빼주기
    const countList = Object.values(obj).sort((a, b) => b - a);  
    countList.forEach((count) => {
        if (NumOfTangerine > 0) {
            NumOfTangerine -= count;
            result++;
        }
    })
    
    return result;
}