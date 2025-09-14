function solution(s) {
    const strList = s.split("").sort();
    let result = "";
    
    for (let i = 0; i < strList.length; i++) {
        const lastIndex = strList.lastIndexOf(strList[i]);
        
        if (i === lastIndex) {
            result += strList[i];
        } else {
            i = lastIndex;
        }
    }
    
    return result;
}