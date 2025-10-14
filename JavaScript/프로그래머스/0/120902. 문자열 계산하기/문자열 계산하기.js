function solution(my_string) {
    const strList = my_string.split(" ");
    let result = Number(strList[0]);
    
    for (let i = 1; i < strList.length; i += 2) {
        if (strList[i] === "+") {
            result += Number(strList[i + 1]);
        } else {
            result -= Number(strList[i + 1]);
        }
    }
    
    return result;
}