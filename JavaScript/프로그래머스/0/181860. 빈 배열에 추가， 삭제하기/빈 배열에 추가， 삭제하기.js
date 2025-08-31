function solution(arr, flag) {
    let result = [];
    
    arr.forEach((item, index) => {
        if (flag[index]) {
            result = [...result, ...new Array(item * 2).fill(item)];
        } else {
            result = result.slice(0, result.length - item);
        }
    })
    
    return result;
}