function solution(arr1, arr2) {
    if (arr1.length > arr2.length) {
        return 1;
    } 
    
    if (arr2.length > arr1.length) {
        return -1;
    }
    
    
    const arr1_sum = arr1.reduce((acc, cur) => acc + cur, 0);
    const arr2_sum = arr2.reduce((acc, cur) => acc + cur, 0);
    
    if (arr1_sum > arr2_sum) {
        return 1;
    } else if (arr2_sum > arr1_sum) {
        return -1;
    } else {
        return 0;
    }
}