function solution(elements) {
    const extended = elements.concat(elements);
    const sumSet = new Set();
    let flag = 0;

    while (flag < elements.length) {
        let sum = 0;

        for (let i = 1; i <= elements.length; i++) {
            sum += extended[flag + i - 1];
            sumSet.add(sum);
        }

        flag++;
    }

    return sumSet.size;
}