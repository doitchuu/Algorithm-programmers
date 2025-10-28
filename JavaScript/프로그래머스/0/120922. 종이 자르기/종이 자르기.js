function solution(M, N) {
    if (M < 2 && N < 2) {
        return 0;
    }
    
    return (M - 1) + (N - 1) * M;
}