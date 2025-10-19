function solution(picture, k) {
    const result = new Array(picture.length * k).fill("");
    
    for (let i = 0; i < picture.length; i++) {
        const expanded = picture[i].split("").map((char) => char.repeat(k)).join("");
        
        for (let j = 0; j < k; j++) {
            result[i * k + j] = expanded;
        }
    }
    
    return result;
}