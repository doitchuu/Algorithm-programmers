function solution(arr, k) {
    const result = [...new Set(arr)];
    
    if (result.length >= k) {
        return result.slice(0, k);
    } else {
        const difference = k - result.length;
        const addedArr = new Array(difference).fill(-1);
        
        return result.concat(addedArr);
    }
}