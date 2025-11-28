function solution(n) {
    const dp = [0, 1, 2];
    
    if (n === 1 || n === 2) {
        return dp[n];
    }
    
    for (let i = 3; i <= n; i++) {
        dp[i] = (dp[i - 2] + dp[i - 1]) % 1234567;
    }
    
    return dp[n];
}