function solution(arr) {
    let clone = arr.slice(); 
    let count = 0;

    while (true) {
        let newArr = clone.map(calculate);

        if (newArr.every((val, idx) => val === clone[idx])) {
            return count;
        }

        clone = newArr;
        count++;
    }
}

function calculate(x) {
    if (x >= 50 && x % 2 === 0) {
        return x / 2;
    } else if (x < 50 && x % 2 !== 0) {
        return x * 2 + 1;
    }
    return x;
}