function solution(a, b) {
    let option;
    
    if (a % 2 === 0 && b % 2 === 0) {
        option = "minus";
    } else if (a % 2 !== 0 && b % 2 !== 0) {
        option = "add";
    } else {
        option = "multiply"
    }
    
    return sum(a, b, option);
}

function sum(a, b, option) {
    switch (option) {
        case "add":
            return (a * a) + (b * b);
        case "minus":
            return Math.abs(a - b);
        case "multiply":
            return 2 * (a + b);
    }
}