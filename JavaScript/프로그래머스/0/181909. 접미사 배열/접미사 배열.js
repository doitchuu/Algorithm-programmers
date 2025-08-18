function solution(my_string) {
    const result = [];
    const finalIndex = my_string.length - 1;
    
    for (let i = 1; i <= my_string.length; i++) {
        result.push(my_string.slice(-i));
    }
    
    return result.sort();
}