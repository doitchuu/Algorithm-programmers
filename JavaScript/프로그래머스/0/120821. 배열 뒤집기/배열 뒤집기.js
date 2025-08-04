function solution(num_list) {
    const result = [];
    
    num_list.map((num) => result.unshift(num));
    
    return result;
}