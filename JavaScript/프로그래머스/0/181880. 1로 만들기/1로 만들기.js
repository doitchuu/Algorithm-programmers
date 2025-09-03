function solution(num_list) {
    let count = 0;
    let numList = num_list;
    
    while (numList.length) {
        for (let i = 0; i < numList.length; i++) {
            if (numList[i] === 1) {
                numList.splice(i, 1);
                continue;
            }
            
            if (numList[i] % 2 === 0) {
                numList[i] = numList[i] / 2;
            } else {
                numList[i] = (numList[i] - 1) / 2;
            }
        
            count++;
        }
    }
    
    return count;
}