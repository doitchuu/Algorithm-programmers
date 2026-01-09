function solution(numer1, denom1, numer2, denom2) {
    let numerator = numer1 * denom2 + numer2 * denom1;
    let denominator = denom1 * denom2;

    const g = gcd(numerator, denominator);
    return [numerator / g, denominator / g];
}

function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}