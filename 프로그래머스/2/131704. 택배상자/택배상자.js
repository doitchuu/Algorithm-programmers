function solution(order) {
  const stack = [];
  let result = 0;

  for (let i = 1; i <= order.length; i++) {
    stack.push(i);

    while (stack.length !== 0 && stack.at(-1) === order[result]) {
      stack.pop();
      result++;
    }
  }

  return result;
}
