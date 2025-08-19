function solution(a, b, c) {
    const setSize = new Set([a, b, c]).size;
    const twoPowerNumbers = Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2);
    const threePowerNumbers = Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3)
    
    switch (setSize) {
        case 3:
            return a + b + c;
            break;
        case 2:
            return (a + b + c) * twoPowerNumbers;
            break;
        case 1:
            return (a + b + c) * twoPowerNumbers * threePowerNumbers;
            break;
        default:
            break;
    }
}