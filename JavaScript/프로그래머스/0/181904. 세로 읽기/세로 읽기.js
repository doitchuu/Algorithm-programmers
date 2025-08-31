function solution(my_string, m, c) {
    const index = c - 1;
    let result = "";
    
    for (let i = index; i < my_string.length; i += m) {
        result += my_string[i];
    }
    
    return result;
}