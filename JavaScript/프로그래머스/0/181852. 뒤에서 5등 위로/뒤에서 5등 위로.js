function solution(num_list) {
    const answer = num_list.sort((a, b) => a - b);
    return answer.splice(5, answer.length - 1);
}