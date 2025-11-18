function solution(s, n) {
    let answer = '';

    for (let i = 0; i < s.length; i++) {
        let ch = s[i];

        if (ch === " ") {
            answer += " ";
            continue;
        }

        let code = ch.charCodeAt();

        if (code >= 65 && code <= 90) {
            code = ((code - 65 + n) % 26) + 65;
        } else {
            code = ((code - 97 + n) % 26) + 97;
        }

        answer += String.fromCharCode(code);
    }

    return answer;
}
