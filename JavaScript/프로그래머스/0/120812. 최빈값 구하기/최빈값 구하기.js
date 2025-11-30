function solution(array) {
    if (array.length === 1) {
        return array[0];
    }
    
    const obj = {};
    
    for (let i = 0; i < array.length; i++) {
        if (obj[array[i]]) {
            obj[array[i]]++;
        } else {
            obj[array[i]] = 1;
        }
    }
    
    const sortedObjList = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    
    if (sortedObjList.length > 1 && sortedObjList[0][1] === sortedObjList[1][1]) {
        return -1;
    }
    
    return Number(sortedObjList[0][0]);
}