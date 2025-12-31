function solution(a, b, c, d) {
  const nums = [a, b, c, d];
  const cnt = new Map();
    
  for (const x of nums) cnt.set(x, (cnt.get(x) ?? 0) + 1);
  const entries = [...cnt.entries()].sort((x, y) => y[1] - x[1]);

  if (entries.length === 1) {
    const p = entries[0][0];
    return 1111 * p;
  }

  if (entries.length === 2) {
    const [p, cp] = entries[0];
    const [q, cq] = entries[1];

    if (cp === 3) {
      return (10 * p + q) ** 2;
    } else {
      return (p + q) * Math.abs(p - q);
    }
  }

  if (entries.length === 3) {
    const q = entries[1][0];
    const r = entries[2][0];
    return q * r;
  }

  return Math.min(...nums);
}