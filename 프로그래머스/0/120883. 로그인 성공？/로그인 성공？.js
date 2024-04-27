function solution(id_pw, db) {
  for (let i = 0; i < db.length; i++) {
    if (db[i].includes(id_pw[0])) {
      const isValidPassword = db[i][1] === id_pw[1];
      
      if (isValidPassword) {
        return "login";
      }
      
      return "wrong pw";
    }
  }
  
  return "fail";
}