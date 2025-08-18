function solution(num_list) {
    const finalNumber = num_list[num_list.length - 1];
    const prevNumber = num_list[num_list.length - 2];
    
    if (finalNumber > prevNumber) {
        num_list.push(finalNumber - prevNumber);
    } else {
        num_list.push(finalNumber * 2);
    }
    
    return num_list;
}