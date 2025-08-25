function solution(myString, pat) {
    const basic = myString.toLowerCase();
    const newPat = pat.toLowerCase();
    
    return basic.includes(newPat) ? 1 : 0;
}