function solution(myString) {
    var answer = [];
    const splitedStr = myString.split("x");
    
    splitedStr.sort();
    
    for (let i = 0; i < splitedStr.length; i++) {
        if (splitedStr[i] !== "") {
            answer.push(splitedStr[i]);
        }
    }
    
    return answer;
}