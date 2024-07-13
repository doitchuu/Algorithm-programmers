function solution(numbers) {
  const poketmon = numbers.length / 2;
  const numberOfUniquePoketmons = new Set(numbers).size;
  
  return poketmon <= numberOfUniquePoketmons ? poketmon : numberOfUniquePoketmons;
}
