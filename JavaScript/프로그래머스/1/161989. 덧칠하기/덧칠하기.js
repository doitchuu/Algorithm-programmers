function solution(n, m, section) {
    const walls = section.length - 1;
    let paint = section[walls] - m + 1;
    let result = 1;
    
    for (let i = walls - 1; i > -1; i--) {
        if (section[i] < paint) {
            paint = section[i] - m + 1;
            result++;
        }
    }
    
    return result;
}