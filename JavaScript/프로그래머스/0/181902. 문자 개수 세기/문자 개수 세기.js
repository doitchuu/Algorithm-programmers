function solution(my_string) {
  const counts = Array(52).fill(0);

  for (let ch of my_string) {
    const code = ch.charCodeAt(0);

    if (code >= 65 && code <= 90) {
      counts[code - 65]++;
    } else if (code >= 97 && code <= 122) {
      counts[code - 71]++;
    }
  }

  return counts;
}