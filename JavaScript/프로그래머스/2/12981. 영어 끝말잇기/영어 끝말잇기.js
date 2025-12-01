function solution(n, words) {
    const result = [0, 0];
    let lastChar = words[0].slice(-1);
    
    for (let i = 0; i < words.length; i++) {
        if (i !== 0 && lastChar !== words[i][0]) {
            result[0] = i % n + 1;
            result[1] = Math.floor(i / n) + 1;
            break;
        }
        
        const lastIndex = words.indexOf(words[i]);
        
        if (lastIndex !== i) {
            result[0] = i % n + 1;
            result[1] = Math.floor(i / n) + 1;
            break;
        }
        
        lastChar = words[i].slice(-1);
    }
    
    return result;
}