function solution(arr, queries) {
    return queries.map((query) => {
        const [s, e, k] = query;
        const queryList = arr.slice(s, e + 1).filter((number) => k < number);
        const sortedArr = queryList.sort((a, b) => a - b);
        
        if (!sortedArr.length) {
            return -1;
        }
        
        return sortedArr[0];
    })
}