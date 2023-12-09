function solution(t, p) {
  const digits = p.length;
  const basic = Number(p);
  let count = 0;
  
  for (let i = 0; i <= t.length - digits; i++) {
    const newNumber = Number(t.slice(i, i + digits));
    
    if (newNumber <= basic) {
      count++;
    }
    
  }
  
  return count;
}