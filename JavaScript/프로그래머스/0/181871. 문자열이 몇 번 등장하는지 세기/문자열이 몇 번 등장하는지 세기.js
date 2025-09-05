function solution(myString, pat) {
    let index = myString.indexOf(pat);
    let count = 0;
    
    while (index !== -1) {
        count++;
        index = myString.indexOf(pat, index + 1);
    }
    
    return count;
}