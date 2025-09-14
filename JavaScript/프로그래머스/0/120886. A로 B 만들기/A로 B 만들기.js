function solution(before, after) {
    const beforeList = {};
    const afterList = {};
    
    for (let i = 0; i < before.length; i++) {       
        if (!beforeList[before[i]]) {
            beforeList[before[i]] = 1;
        }
        
        if (!afterList[after[i]]) {
            afterList[after[i]] = 1;
        }
        
        beforeList[before[i]]++;
        afterList[after[i]]++;
     }
    
    for (const key in beforeList) {
        if (beforeList[key] !== afterList[key]) {
            return 0;
        }
    }
    
    return 1;
}