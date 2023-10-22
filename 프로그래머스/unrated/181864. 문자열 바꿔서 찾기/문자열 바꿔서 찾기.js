function solution(myString, pat) {
    var answer = 0;
    let newStr = "";
    
    for (let i = 0; i < myString.length; i++) {
        if (myString[i] === "A") {
            newStr += "B";
        } else {
            newStr += "A";
        }
    }
    
    if (newStr.includes(pat)) {
        answer = 1;
    }
    
    return answer;
}