function solution(s){
    if (s.length % 2 !== 0) {
        return false;
    }
    
    let count = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            count++;
        } else {
            count--;
        }
        
        if (count < 0) {
            return false;
        }
    }
    
    return count === 0;
}