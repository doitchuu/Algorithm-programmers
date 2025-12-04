function solution(want, number, discount) {
    let possibleDays = 0;
    const wantList = {};
    
    want.forEach((item, index) => wantList[item] = number[index]);
    
    for (let start = 0; start <= discount.length - 10; start++) {
        const diffList = {};
        
        for (let i = start; i < 10 + start; i++) {
            diffList[discount[i]] = (diffList[discount[i]] || 0) + 1;
        }
        
        let isSame = true;
        
        for (const item in wantList) {
            if (!diffList[item] || diffList[item] !== wantList[item]) {
                isSame = false;
                break;
            }
        }
        
        if (isSame) {
            possibleDays++;
        }
    }
    
    return possibleDays;
}