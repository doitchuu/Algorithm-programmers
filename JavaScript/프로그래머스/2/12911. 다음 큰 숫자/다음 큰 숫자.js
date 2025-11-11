function solution(n) {
    const one_count = [...n.toString(2)].filter((char) => char === "1").length;
    let result = n + 1;
    
    while (result) {
        const newCount = [...result.toString(2)].filter((char) => char === "1").length;
        
        if (newCount === one_count) {
            break;
        }
        
        result++;
    }
        
    return result;
}