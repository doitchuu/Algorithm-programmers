function solution(rsp) {
    // 2 -> 0이김, 0 -> 5이김, 5 -> 2이김 문자열로 ㅁ나들기
    const rspList = [...rsp];
    let result = "";
    
    rspList.forEach((rsp) => {
        if (rsp === "2") {
            result += "0";
        } else if (rsp === "0") {
            result += "5";
        } else {
            result += "2";
        }
    })
    
    return result;
}