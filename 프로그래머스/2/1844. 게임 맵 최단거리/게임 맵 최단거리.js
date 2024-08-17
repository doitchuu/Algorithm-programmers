function solution(maps) {
  const width = maps.length;
  const height = maps[0].length;
  
  maps[0][0] = 2;
  
  return bfs([0, 0]);
  
  function bfs(start) {
    const queue = [start];
    const moveX = [0, -1, 0, 1];
    const moveY = [-1, 0, 1, 0];
    let sum = 0;
    
    while (queue.length) {
      const [currentX, currentY] = queue.shift();
      
      if (currentX === width - 1 && currentY === height - 1) {
        return maps[currentX][currentY] - 1;
      }
      
      for (let i = 0; i < 4; i++) {
        const nextX = currentX + moveX[i];
        const nextY = currentY + moveY[i];
        
        if (
          nextX < 0 || nextX >= width ||
          nextY < 0 || nextY >= height ||
          maps[nextX][nextY] === 0 ||
          maps[nextX][nextY] !== 1
        ) {
          continue;
        }
        
        maps[nextX][nextY] = maps[currentX][currentY] + 1;
        queue.push([nextX, nextY]);
      }
    }
    
    return -1;
  }
}
