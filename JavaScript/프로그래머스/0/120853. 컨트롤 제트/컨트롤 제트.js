function solution(s) {
    const strList = s.split(" ");
    
    return strList.reduce((acc, cur, idx) => {
        if (cur === "Z") {
            return Number(acc) - Number(strList[idx - 1]);
        }
        
        return Number(acc) + Number(cur);
    }, 0);
}