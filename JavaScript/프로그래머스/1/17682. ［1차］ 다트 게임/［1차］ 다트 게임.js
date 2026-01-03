function solution(dartResult) {
    let scores = [];
    let num = 0;

    for (let i = 0; i < dartResult.length; i++) {
        const ch = dartResult[i];

        // 숫자 처리 (10 포함)
        if (!isNaN(ch)) {
            if (ch === '1' && dartResult[i + 1] === '0') {
                num = 10;
                i++;
            } else {
                num = Number(ch);
            }
        }
        // 보너스 처리
        else if (ch === 'S') {
            scores.push(num);
        }
        else if (ch === 'D') {
            scores.push(num ** 2);
        }
        else if (ch === 'T') {
            scores.push(num ** 3);
        }
        // 옵션 처리
        else if (ch === '*') {
            if (scores.length > 1) {
                scores[scores.length - 2] *= 2;
            }
            scores[scores.length - 1] *= 2;
        }
        else if (ch === '#') {
            scores[scores.length - 1] *= -1;
        }
    }

    return scores.reduce((a, b) => a + b, 0);
}
