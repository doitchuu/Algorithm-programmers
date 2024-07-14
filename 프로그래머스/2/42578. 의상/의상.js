function solution(clothes) {
  let clothesMap = {};

  for (let i = 0; i < clothes.length; i++) {
    let type = clothes[i][1];
    
    if (clothesMap[type]) {
      clothesMap[type]++;
      
      continue;
    }
  
    clothesMap[type] = 1;
  }

  let combinations = 1;

  for (let type in clothesMap) {
    combinations *= (clothesMap[type] + 1);
  }

  return combinations - 1;
}
