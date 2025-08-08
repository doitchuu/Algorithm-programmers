function solution(my_string) {
    const vowels = ["a", "e", "i", "o", "u"];
    const strList = [...my_string];
    
    for (let i = 0; i < strList.length; i++) {
        if (vowels.includes(strList[i])) {
            strList.splice(i, 1);
            i--;
        }
    }
    
    return strList.join("");
}