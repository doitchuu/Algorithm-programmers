function solution(i, j, k) {
    const string_K = k.toString();
    let count = 0;
    
    for (let index = i; index <= j; index++) {
        const string = index.toString().replaceAll(string_K, "");
        const indexToStr = index.toString();
        
        if (string.length !== indexToStr.length) {
            count += indexToStr.length - string.length;
        }
    }
    
    return count;
}