function solution(maps) {
  const width = maps.length;
  const height = maps[0].length;
  const isVisited = Array.from({length: width}, (_) => new Array(height).fill(false));
  
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      if (maps[i][j] === 0 || isVisited[i][j]) {
        continue;
      }
      
      return bfs([i, j]);
    }
  }
  
  function bfs(start) {
    const queue = [start];
    const moveX = [0, -1, 0, 1];
    const moveY = [-1, 0, 1, 0];
    
    while (queue.length) {
      const [currentX, currentY] = queue.shift();
      
      if (currentX === width - 1 && currentY === height - 1) {
        return maps[currentX][currentY];
      }
      
      if (isVisited[currentX][currentY]) {
        continue;
      }
      
      isVisited[currentX][currentY] = true;
      
      for (let i = 0; i < 4; i++) {
        const nextX = currentX + moveX[i];
        const nextY = currentY + moveY[i];
        
        if (
          nextX < 0 || nextX >= width ||
          nextY < 0 || nextY >= height ||
          maps[nextX][nextY] === 0 ||
          isVisited[nextX][nextY] === true
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
