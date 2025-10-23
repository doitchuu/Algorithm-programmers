function solution(A,B){
    const result = [];
    
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    
    return A.reduce((acc, cur, idx) => acc + (cur * B[idx]), 0);
}