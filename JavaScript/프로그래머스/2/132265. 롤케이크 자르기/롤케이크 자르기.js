function solution(topping) {
  let result = 0;

  const left = new Set();      // 철수(왼쪽)가 가진 토핑 종류
  const right = new Map();     // 동생(오른쪽)이 가진 토핑 종류별 개수

  for (const t of topping) {
    right.set(t, (right.get(t) ?? 0) + 1);
  }

  for (let i = 0; i < topping.length - 1; i++) {
    const cur = topping[i];

    left.add(cur);

    right.set(cur, right.get(cur) - 1);

    if (right.get(cur) === 0) right.delete(cur);

    if (left.size === right.size) result++;
  }

  return result;
}