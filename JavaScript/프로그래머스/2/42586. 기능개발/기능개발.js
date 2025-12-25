function solution(progresses, speeds) {
    const result = [];
    let count = 0;
    let maxDay = 0;
    
    for (let i = 0; i < progresses.length; i++) {
        const day = Math.ceil((100 - progresses[i]) / speeds[i]); // 7
        
        if (i === 0) {
            maxDay = day;
            count++;
            continue;
        }
        
        if (maxDay < day) {
            maxDay = day;
            result.push(count);
            count = 1;
            continue;
        }
        
        count++;
    }
    
    result.push(count);
    
    return result;
}