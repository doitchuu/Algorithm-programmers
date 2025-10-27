function solution(keyinput, board) {
  const [width, height] = board;
  let result = [0, 0];

  const maxX = Math.floor(width / 2);
  const maxY = Math.floor(height / 2);

  for (let i = 0; i < keyinput.length; i++) {
    let [x, y] = result;

    switch (keyinput[i]) {
      case "left":
        x -= 1;
        break;
      case "right":
        x += 1;
        break;
      case "up":
        y += 1;
        break;
      case "down":
        y -= 1;
        break;
      default:
        break;
    }

    if (x > maxX) x = maxX;
    if (x < -maxX) x = -maxX;
    if (y > maxY) y = maxY;
    if (y < -maxY) y = -maxY;

    result = [x, y];
  }

  return result;
}