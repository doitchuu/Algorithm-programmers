function solution(arr) {
    const stk = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (!stk.length) {
            stk.push(arr[i]);
            continue;
        }
        
        const last = stk[stk.length - 1];
        
        if (last < arr[i]) {
            stk.push(arr[i]);
        } else {
            stk.pop();
            i--;
        }
    }
    
    return stk;
}