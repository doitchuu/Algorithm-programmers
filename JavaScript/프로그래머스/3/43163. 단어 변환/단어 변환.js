function solution(begin, target, words) {
    if (!words.includes(target)) {
        return 0;
    }
    
    const queue = [[begin, 0]];
    const visited = new Set([begin]);
    
    while (queue.length) {
        const [current, step] = queue.shift();
        
        if (current === target) {
            return step;
        }
        
        for (const word of words) {
            if (!visited.has(word) && isOneDiff(current, word)) {
                visited.add(word);
                queue.push([word, step + 1]);
            }
        }
    }
    
    
    return 0;
}

function isOneDiff(a, b) {
    let diff = 0;
    
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            diff++;
        }
    }
    
    return diff === 1;
}