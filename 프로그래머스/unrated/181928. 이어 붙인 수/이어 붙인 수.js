function solution(num_list) {
    var answer = 0;
    let evenStr = "";
    let oddStr = "";
    
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 === 0) {
            evenStr += "" + num_list[i];
        } else {
            oddStr += "" + num_list[i];
        } 
    }
    
    answer = Number(oddStr) + Number(evenStr);
    
    return answer;
}