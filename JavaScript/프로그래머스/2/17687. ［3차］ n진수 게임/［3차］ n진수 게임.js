function solution(n, t, m, p) {
    const numList = [];
    let result = "";
    
    for (let i = 0; i <= t * m; i++) {
        const number = i.toString(n).toUpperCase();
        numList.push(...number);
    }
    
    for (let order = p - 1; order < t * m; order += m) {
        result += numList[order];
    }
    
    return result;
}