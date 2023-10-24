function solution(myString) {
    var answer = '';
    
    for (let i = 0; i < myString.length; i++) {

        if (myString[i] === "a") {
            answer += "A";
        } else if (myString[i] === "A") {
            answer += "A";
        } else {
            answer += myString[i].toLowerCase();
        }
    }
    
    return answer;
}