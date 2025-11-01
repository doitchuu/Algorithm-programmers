function solution(s) {
  let transformCount = 0; // 이진 변환 횟수
  let zeroCount = 0;      // 제거된 0의 총 개수

  while (s !== "1") { // s가 "1"이 될 때까지 반복
    // 1️⃣ 0을 제거
    const removed = s.replace(/0/g, "");
    zeroCount += s.length - removed.length; // 제거된 0 개수 누적

    // 2️⃣ 1의 개수로 길이를 구하고 → 2진수로 변환
    const length = removed.length;
    s = length.toString(2);

    // 3️⃣ 변환 횟수 +1
    transformCount++;
  }

  return [transformCount, zeroCount];
}