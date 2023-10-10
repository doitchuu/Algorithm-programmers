function solution(my_string, target) {
    let answer = 0;

    for (let i = 0; i < my_string.length; i++) {
        const item = my_string.slice(i, i + target.length);

        if (item === target) answer = 1;
    }

    return answer;
}