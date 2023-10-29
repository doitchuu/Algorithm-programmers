function solution(s){
    var answer = true;   
    let pCount = 0;
    let yCount = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "P" || s[i] === "p") {
            pCount++;
        } 
        
        if (s[i] === "Y" || s[i] === "y") {
            yCount++;
        }
    }
    
    return pCount === yCount;
}