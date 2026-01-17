function solution(s) {
    const map = new Map();
    const result = [];
    let num = "";
    
    for (let i = 2; i < s.length - 2; i++) {
        if (s[i] === ",") {
            continue;
        }
        
        if (s[i] !== "," && s[i] !== "{" && s[i] !== "}") {
            num += s[i];
            
            if (s[i + 1] !== "," && s[i + 1] !== "}") {
                continue;
            }
            
            if (map.has(num)) {
                map.set(num, map.get(num) + 1);
            } else {
                map.set(num, 1);
            }
            
            num = "";
        }
    }
    
    for (const num of map) {
        result[num[1] - 1] = Number(num[0]);
    }
    
    return result.reverse();
}