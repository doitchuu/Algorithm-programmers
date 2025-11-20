function solution(polynomial) {
    const polynomialList = polynomial.split(" + ");
    let x = 0;
    let number = 0;
    
    for (str of polynomialList) {
        if (str[str.length - 1] === "x") {
            if (str.length === 1) {
                x += 1;
                continue;
            }
            
            x += Number(str.slice(0, str.length - 1));
            continue;
        }
        
        number += Number(str);
    }
    
    if (!x) {
        return String(number);
    }
    
    if (x === 1) {
        return number ? "x + " + number : "x";
    }
    
    return number ? x + "x + " + number : x + "x";
}