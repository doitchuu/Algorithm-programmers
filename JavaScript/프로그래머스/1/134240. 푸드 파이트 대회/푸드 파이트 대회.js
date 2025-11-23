function solution(food) {
    let answer = "";
    
    for (let i = 1; i < food.length; i++) {
        const num = Math.floor(food[i] / 2);
        answer += String(i).repeat(num);
    }
    
    return answer + "0" + [...answer].reverse().join("");
}