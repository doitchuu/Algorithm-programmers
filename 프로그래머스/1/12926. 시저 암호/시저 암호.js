function solution(s, n) {
    var answer = "";
    const capitalLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const lowerLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    
    for (let i = 0; i < s.length; i++) {
        if (!capitalLetters.includes(s[i]) && !lowerLetters.includes(s[i])) {
            answer += s[i];
            continue;
        }
        
        if (capitalLetters.includes(s[i])) {
            let index = (capitalLetters.indexOf(s[i]) + n) % 26;
            answer += capitalLetters[index];
            continue;
        }
        
        let index = (lowerLetters.indexOf(s[i]) + n) % 26;
        answer += lowerLetters[index];
    }
    
    return answer;
}
