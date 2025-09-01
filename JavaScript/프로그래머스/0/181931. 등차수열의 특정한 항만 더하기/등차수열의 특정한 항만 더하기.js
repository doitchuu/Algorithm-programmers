function solution(a, d, included) {
    const sequence = new Array(included.length).fill(a).map((num, index) => {
        if (index) {
            return num + (d * index);
        } else {
            return num;
        }
    });

    return sequence.reduce((acc, cur, index) => {
        if (included[index]) {
            return acc + cur;
        } else {
            return acc;
        }
    }, 0);
}