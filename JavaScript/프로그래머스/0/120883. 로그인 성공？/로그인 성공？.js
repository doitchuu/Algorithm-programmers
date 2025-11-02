function solution(id_pw, db) {
    for (const info of db) {
        const [id, password] = info;
        
        if (id === id_pw[0] && password === id_pw[1]) {
            return "login";
        } 
        
        if (id === id_pw[0] && password !== id_pw[1]) {
            return "wrong pw";
        }
    }
    
    return "fail";
}