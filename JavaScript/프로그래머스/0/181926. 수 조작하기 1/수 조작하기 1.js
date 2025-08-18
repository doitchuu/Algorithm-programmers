function solution(n, control) {
    let result = n;
    const controls = {
        w: 1,
        s: -1,
        d: 10,
        a: -10,
    }
    
    control.split("").forEach((item) => result += controls[item]);
    
    return result;
}