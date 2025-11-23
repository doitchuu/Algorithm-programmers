function solution(s) {
    const alphabets = ["zero", "one", "two", "three", "four", "five", "six", "seven","eight", "nine"];
    
    for (let i = 0; i < alphabets.length; i++) {
        s = s.replaceAll(alphabets[i], i);
    }
    
    return Number(s);
}