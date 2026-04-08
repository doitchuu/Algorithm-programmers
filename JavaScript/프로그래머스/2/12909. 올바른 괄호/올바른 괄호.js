function solution(s){
    if (s[0] === ")") {
        return false;
    }

    let result = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            result++;
        } else {
            result--;
        }
        
        if (result < 0) {
            return false;
        }
    }
    
    return result === 0;
}