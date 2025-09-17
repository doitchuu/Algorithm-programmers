function solution(array, n) {
    return array.sort((a, b) => {
        const diffA = Math.abs(n - a);
        const diffB = Math.abs(n - b);
        
        if (diffA === diffB) {
            return a - b;
        }
        
        return diffA - diffB;
    })[0];
}