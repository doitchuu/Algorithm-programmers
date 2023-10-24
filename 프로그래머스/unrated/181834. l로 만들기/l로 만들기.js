function solution(myString) {
    var answer = '';
    const alphbet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
    
    for (let i = 0; i < myString.length; i++) {
        if (alphbet.includes(myString[i])) {
            answer += "l";
        } else {
            answer += myString[i];
        }
    }
    
    return answer;
}