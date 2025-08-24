function solution(num_list) {
    const result = [0, 0];
    
    num_list.forEach((num, index) => {
        if (index % 2 === 0) {
            result[0] += num;
        } else {
            result[1] += num;
        }
    })
    
    return Math.max(...result);
}