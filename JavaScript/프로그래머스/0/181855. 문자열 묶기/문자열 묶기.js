function solution(strArr) {
    const lengthList = {};
    let result = 0;
    
    for (let i = 0; i < strArr.length; i++) {
        const key = strArr[i].length;
        
        if (!lengthList[key]) {
            lengthList[key] = 1;
            continue;
        }
        
        lengthList[key]++;
    }
    
    for (const key in lengthList) {
        result = Math.max(lengthList[key], result);
    }
    
    return result;
}