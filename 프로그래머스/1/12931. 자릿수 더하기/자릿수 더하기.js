function solution(n)
{
    var answer = 0;
    const numToStr = String(n);
    
    for (let i = 0; i < numToStr.length; i++) {
        answer += Number(numToStr[i]);
    }
    
    return answer;
}