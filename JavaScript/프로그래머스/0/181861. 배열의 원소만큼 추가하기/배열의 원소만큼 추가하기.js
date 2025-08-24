function solution(arr) {
    const answer = [];
    arr.forEach((item) => answer.push(...Array.from({length: item}).fill(item)));
    return answer;
}