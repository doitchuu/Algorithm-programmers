function solution(array) {
  const count = array.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  const max = Math.max(...Object.values(count));
  const modes = Object.keys(count).filter(k => count[k] === max);
    
  return modes.length === 1 ? Number(modes[0]) : -1;
}