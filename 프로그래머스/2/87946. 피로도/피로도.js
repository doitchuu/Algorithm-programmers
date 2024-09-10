function solution(k, dungeons) {
  let answer = [];
  let isVisited = Array(dungeons.length).fill(false);

  function dfs(count, k) {
    answer.push(count);

    for (let i = 0; i < dungeons.length; i++) {
      let current = dungeons[i];
        
      if (k >= current[0] && !isVisited[i]) {
        isVisited[i] = 1;
        dfs(count + 1, k - current[1]);
        isVisited[i] = 0;
      }
    }
  }

  dfs(0, k);

  return Math.max(...answer);
}
