function solution(brown, yellow) {
    const carpet = brown + yellow;
    
    for (let i = 1; i < carpet; i++) {
        const height = i;
        let width;
        
        if (carpet % i === 0) {
            width = carpet / i;
        }
        
        if (width && (width - 2) * (height - 2) === yellow) {
            return [width, height];
        }
    }
}