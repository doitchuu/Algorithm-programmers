function solution(n) {
    var answer = 0;
    const array = [];
    
    for (let i = 0; i <= n; i++) {
        if (i <= 1) {
            array.push(i);
        } else {
            array.push((array[i - 2] + array[i - 1]) % 1234567);
        }
    }
    
    answer = array[array.length - 1];
    
    return answer;
}
