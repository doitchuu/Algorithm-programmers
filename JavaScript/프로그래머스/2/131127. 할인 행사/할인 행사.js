function solution(want, number, discount) {
    const wantMap = {};
    let answer = 0;

    // 1) 원하는 물건 → 개수로 맵 만들기
    for (let i = 0; i < want.length; i++) {
        wantMap[want[i]] = number[i];
    }

    // 2) discount에서 시작점을 하나씩 밀면서 10일 구간 검사
    const totalDays = discount.length;
    const period = 10;

    for (let start = 0; start <= totalDays - period; start++) {
        const haveMap = {};

        // start부터 10일 동안 등장하는 물건 개수 세기
        for (let d = 0; d < period; d++) {
            const item = discount[start + d];
            haveMap[item] = (haveMap[item] || 0) + 1;
        }

        // wantMap과 haveMap이 같은지 비교
        let ok = true;
        for (let item in wantMap) {
            if ((haveMap[item] || 0) !== wantMap[item]) {
                ok = false;
                break;
            }
        }

        if (ok) answer++;
    }

    return answer;
}