function solution(sizes) {
    let maxH = 0;
    let maxW = 0;
    for (const [w, h] of sizes) {
        const max = Math.max(w, h);
        const min = Math.min(w, h);
        
        maxH = Math.max(max, maxH);
        maxW = Math.max(min, maxW);
    }
    
    return maxH * maxW;
}