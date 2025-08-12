function solution(my_string) {
    let result = 0;
    
    for (let i = 0; i < my_string.length; i++) {
        const isNotNumber = Number.isNaN(Number(my_string[i]));
        
        if (isNotNumber) {
            continue;
        }
        
        result += Number(my_string[i]);
    }
    
    return result;
}