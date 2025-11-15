function solution(s) {
    const current = s.split("");
    const prev = [current.shift()];
    const result = [-1];
    
    for (let i = 1; i < s.length; i++) {
        const lastIndex = prev.lastIndexOf(s[i]);
        
        if (lastIndex === -1) {
            result.push(lastIndex);
        } else {
            result.push(prev.length - lastIndex); 
        }
        
        prev.push(current.shift());
    }
    
    return result;
}