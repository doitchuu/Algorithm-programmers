function solution(arr, intervals) {
    const [firstArr, secondArr] = intervals;
    const [a1, b1] = firstArr;
    const [a2, b2] = secondArr;
    
    return arr.slice(a1, b1 + 1).concat(arr.slice(a2, b2 + 1));
}