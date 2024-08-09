function solution(s) {
  const result = [];
  const tuples = JSON.parse(s.replace(/{/g, "[").replace(/}/g, "]")).sort(
    (a, b) => a.length - b.length
  );
  const set = new Set();

  for (const tuple of tuples) {
    for (const elem of tuple) {
      if (!set.has(elem)) {
        set.add(elem);
        result.push(elem);
      }
    }
  }

  return result;
}
