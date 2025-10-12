function solution(my_string) {
    const results = new Array(52).fill(0);
    
    for (let i = 0; i < my_string.length; i++) {
        const indexOfStr = my_string.charCodeAt(i);
        let index;
        
        if (indexOfStr < 97) {
            index = indexOfStr - 65;
        } else {
            index = indexOfStr - 97 + 26;
        }
        
        results[index]++;
    }
    
    return results;
}