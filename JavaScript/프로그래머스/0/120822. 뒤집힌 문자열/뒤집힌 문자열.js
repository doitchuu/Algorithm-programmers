function solution(my_string) {
    let result = "";
    
    for (let i = 1; i <= my_string.length; i++) {
        result += my_string[my_string.length - i];
    }
    
    return result;
}