function solution(num_list) {
    var answer = [];
    const listLastIndex = num_list[num_list.length - 1];
    const listPrevIndex = num_list[num_list.length - 2];
    
    if (listLastIndex > listPrevIndex) {
        num_list.push(listLastIndex - listPrevIndex);
    } else if (listLastIndex <= listPrevIndex) {
      num_list.push(listLastIndex * 2);
    } else {
        return answer = num_list;
    }
    return answer = num_list;
}