function solution(arr) {
    let clone = arr.slice(); 
    let count = 0;

    while (true) {
        const temp = clone.map((item) => calculate(item));
        let isSameArray = temp.filter((item, index) => item !== clone[index]);
        
        if (!isSameArray.length) {
            break;
        }
        
        clone = temp;
        count++;
    }
    
    return count;
}

function calculate(x) {
    if (x >= 50 && x % 2 === 0) {
        return x / 2;
    } else if (x < 50 && x % 2 !== 0) {
        return x * 2 + 1;
    }
    return x;
}