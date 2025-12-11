function solution(common) {
    const multiply = common[1] / common[0]; 
    const sum = common[1] - common[0];
    
    for (let i = 0; i < common.length; i++) {
        if (common[i] * multiply !== common[i + 1]) {
            return common[common.length - 1] + sum;
        }
        
        if (common[i] + sum !== common[i + 1]) {
            return common[common.length - 1] * sum;
        }
    }
}