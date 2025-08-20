function solution(num, k) {
    const hasK = String(num).indexOf(String(k));
    return hasK === -1 ? -1 : hasK + 1;
}