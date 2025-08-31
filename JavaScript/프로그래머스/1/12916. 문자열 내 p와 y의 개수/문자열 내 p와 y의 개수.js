function solution(s){
    const result = [0, 0];
    
    [...s.toLowerCase()].forEach((str) => {
        if (str === "p") {
            result[0]++;
        } 
        
        if (str === "y") {
            result[1]++;
        }
    })
    
    return result[0] === result[1];
}