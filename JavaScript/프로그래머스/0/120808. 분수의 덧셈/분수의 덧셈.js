function solution(numer1, denom1, numer2, denom2) {
    let numerator = numer1 * denom2 + numer2 * denom1;
    let denominator = denom1 * denom2;
    
    const number = gcb(numerator, denominator);
    
    return [numerator / number, denominator / number];
}

function gcb(a, b) {
    if (b === 0) {
        return a;
    }
    
    return gcb(b, a % b);
}