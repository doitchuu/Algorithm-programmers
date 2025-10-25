function solution(arr) {
    const row = arr.length;
    const column = Math.max(...arr.map((item) => item.length));
    const longLength = Math.max(row, column);
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length === longLength) {
            continue;
        }
        
        const diff = longLength - arr[i].length;
        const zeros = new Array(diff).fill(0);
        
        arr[i] = arr[i].concat(zeros);
    }
    
    if (arr.length < longLength) {
        const diff = longLength - arr.length;
        const zeros = new Array(longLength).fill(0);
        
        for (let i = 0; i < diff; i++) {
            arr.push(zeros);
        }
    }
    
    return arr;
}