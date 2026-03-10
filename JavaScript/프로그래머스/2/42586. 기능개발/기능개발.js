function solution(progresses, speeds) {
    const answer = [];
    let maxDay = Math.ceil((100 - progresses[0]) / speeds[0]); 7
    let feature = 1;
    
    for (let i = 1; i < progresses.length; i++) {
        const day = Math.ceil((100 - progresses[i]) / speeds[i]);
        
        if (day <= maxDay) {
            feature++;
        } else {
            answer.push(feature);
            maxDay = day;
            feature = 1;
        }
    }

    answer.push(feature);
    return answer;
}