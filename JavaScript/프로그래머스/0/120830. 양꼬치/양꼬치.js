function solution(n, k) {
    // 양꼬치는 1인분에 12,000원, 음료수는 2,000원
    // 서비스 금액 계산 (양꼬치 먹은 갯수 10으로 나누고 2000원 곱해서 빼기)
    const food = n * 12000;
    const drink = k * 2000;
    const service = Math.floor(n / 10) * 2000;
    
    return food + drink - service;
}