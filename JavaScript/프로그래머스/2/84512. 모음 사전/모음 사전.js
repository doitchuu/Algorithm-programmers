function solution(word) {
    const ALPHABETS = ["A", "E", "I", "O", "U"];
    let count = 0;
    let result;
    
    function dfs(char, loop) {
        if (char === word) {
            result = count;
            return;
        }
        
        if (char.length === 5) {
            return;
        }
        
        for (let i = 0; i < ALPHABETS.length; i++) {
            const str = ALPHABETS[i];
            count++;
            dfs(char + str, loop + 1);
        }
    }
    
    dfs("", 1);
    
    return result;
}