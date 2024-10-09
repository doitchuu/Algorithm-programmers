const MIN_NUMBER = -5;
const MAX_NUMBER = 5;

function solution(dirs) {
  let current = [0, 0];
  const roadResult = {};
  let visitCount = { count: 0 };
  
  for (let i = 0; i < dirs.length; i++) {
    current = findCoordinate(dirs[i], current, roadResult, visitCount);
  }
  
  return visitCount.count;
}

function findCoordinate(dir, current, roadResult, visitCount) {
  const next = [...current];
  
  switch(dir) {
    case "U":
      next[1] += 1;
      break;
      
    case "D":
      next[1] -= 1;
      break;
      
    case "L":
      next[0] -= 1;
      break;
      
    case "R":
      next[0] += 1;
      break;  
  }
  
  if (
    next[0] < MIN_NUMBER ||
    next[1] < MIN_NUMBER ||
    next[0] > MAX_NUMBER ||
    next[1] > MAX_NUMBER
  ) {
    return current;
  }
  
   if (!roadResult[`${current} to ${next}`]) {
    visitCount.count++;
  }
  
  roadResult[`${current} to ${next}`] = true;
  roadResult[`${next} to ${current}`] = true;
  
  return next;
}
