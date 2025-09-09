function solution(array) {
    const arrToStr = array.join("");
    let count = 0;
    
    for (let i = 0; i < arrToStr.length; i++) {
        if (arrToStr[i] === "7") {
            count++;
        }
    }
    
    return count;
}