function solution(n) {
    if (n === 1 || n === 2) {
        return n;
    }
    
    const dp = [1, 2];
    const mov = 1234567;
    
    for (let i = 2; i < n; i++) {
        dp[i] = (dp[i - 2] + dp[i - 1]) % mov;
    }
    
    return dp[n - 1];
}