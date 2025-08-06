function solution(s1, s2) {
    let answer = 0;
    
    s1.forEach((item) => {
        const sameItems = s2.filter((el) => el === item);
        
        if (sameItems.length) {
            answer++;
        }
    })
    
    return answer;
}