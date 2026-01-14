function solution(babbling) {
  const list = ["aya", "ye", "woo", "ma"];
  let result = 0;
  let index = 0;

  while (index !== babbling.length) {
    let word = babbling[index];
    let prev = "";

    // 최대 5번만 자르면 끝남(길이 5 이하 단어라서 충분)
    for (let step = 0; step < 6; step++) {
      let cut = false;

      for (let i = 0; i < list.length; i++) {
        const speak = list[i];

        if (word.startsWith(speak) && prev !== speak) {
          word = word.slice(speak.length);
          prev = speak;
          cut = true;
          break;
        }
      }

      if (!cut) break; // 이번 step에서 아무것도 못 잘랐으면 더 못 자름
      if (word.length === 0) break; // 다 잘랐으면 종료
    }

    if (word.length === 0) result++;
    index++;
  }

  return result;
}