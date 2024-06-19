function solution(babbling) {
  const babblingList = ["aya", "ye", "woo", "ma"];
  let count = 0;
  
  babbling.forEach((index) => {
    for(let i = 0; i < 4; i++){
      if(index.includes(babblingList[i].repeat(2))) {
        break;
      }

      index = index.replaceAll(babblingList[i], "0");
    }

    if([...new Set(index.split(""))].join("") === "0") {
      count++;
    }
  });

  return count;
}
