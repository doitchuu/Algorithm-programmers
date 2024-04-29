function solution(spell, dic){
  const counts = new Array(dic.length).fill(0);
  
  for (let i = 0; i < dic.length; i++) {
    for (let j = 0; j < spell.length; j++) {
      if (dic[i].includes(spell[j])) {
        counts[i] += 1;
      }
    }    
  }
  
  if (counts.includes(spell.length)) {
    return 1;
  }
  
  return 2;
}