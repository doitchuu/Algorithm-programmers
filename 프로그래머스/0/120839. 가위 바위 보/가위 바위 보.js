function solution(rsp) {
  const rspList = [...rsp];
  let result = "";
  
  for (let i = 0; i < rspList.length; i++) {
    switch(rspList[i]) {
      case "0":
        result += "5";
        break;
      case "2":
        result += "0";
        break;
      case "5":
        result += "2";
        break;
    }
  }
  
  return result;
}
