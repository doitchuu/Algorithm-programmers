function solution(number, limit, power) {
    let steel = 0;

    for (let i = 1; i <= number; i++) {
        const attack = countDivisor(i);

        if (attack > limit) {
            steel += power;
        } else {
            steel += attack;
        }
    }

    return steel;
}

function countDivisor(num) {
    let count = 0;

    for (let i = 1; i * i <= num; i++) {
        if (num % i === 0) {
            count++;               
            if (i * i !== num) {
                count++;            
            }
        }
    }

    return count;
}