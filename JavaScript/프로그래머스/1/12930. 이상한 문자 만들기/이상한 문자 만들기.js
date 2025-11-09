function solution(s) {
    const strList = s.split(" ").map((str) => str.split(""));
    
    for (let i = 0; i < strList.length; i++) {
        const newStr = strList[i].map((str, index) => {
            if (index % 2 === 0) {
                return str.toUpperCase();
            } else {
                return str.toLowerCase();
            }
        })
        
        strList[i] = newStr.join("");
    }
    
    return strList.join(" ");
}