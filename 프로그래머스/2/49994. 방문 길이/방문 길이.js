const MINIMUM = -5;
const MAXIMUM = 5;

function canGo(number) {
  if (number < MINIMUM || number > MAXIMUM) {
    return false;
  }
    
  return true;
}

function solution(dirs) {
  const history = {};
  const current = [0, 0];
  let firstVisitcount = 0;
    
  for (const command of dirs) {
    move(current, command);
  }
    
  return firstVisitcount;
    
  function move(current, command) {
    const next = [...current];
      
    switch(command) {
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
      
    const [x, y] = next;
      
    if (!canGo(x) || !canGo(y)) {
      return;
    }
      
    if (!history[`${current} to ${next}`]) {
      firstVisitcount++;
      history[`${current} to ${next}`] = true;
      history[`${next} to ${current}`] = true;
    }
      
    current[0] = x;
    current[1] = y;
  }
}
