function solution(s) {
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
        const current = s[i];
        const prev = stack[stack.length - 1];
        
        if (prev === current) {
            stack.pop();
        } else {
            stack.push(current);
        }
    }
    
    return stack.length ? 0 : 1;
}
