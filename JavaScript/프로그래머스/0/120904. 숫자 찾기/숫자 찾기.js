function solution(num, k) {
    const strList = [...String(num)];
    const index = strList.indexOf(String(k));
    
    return index >= 0 ? index + 1 : index;
}