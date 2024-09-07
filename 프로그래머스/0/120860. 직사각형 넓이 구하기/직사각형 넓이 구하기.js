function solution(dots) {
  const xDots = [];
  const yDots = [];
  
  for (let i = 0; i < dots.length; i++) {
    xDots.push(dots[i][0]);
    yDots.push(dots[i][1]);
  }
  
  xDots.sort((a, b) => b - a);
  yDots.sort((a, b) => b - a);
  
  return (xDots[0] - xDots[xDots.length - 1]) * (yDots[0] - yDots[yDots.length - 1]);
}
