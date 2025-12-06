function solution(quiz) {
    const result = [];
    
    quiz.forEach((formula) => {
        const list = formula.split(" "); // 3, -, 4, = , -3
        const X = Number(list[0]);
        const Y = Number(list[2]);
        const Z = Number(list[4]);
        
        if (list[1] === "-") {
            (X - Y) === Z ? result.push("O") : result.push("X");
        } else {
            (X + Y) === Z ? result.push("O") : result.push("X");
        }
    })
    
    return result;
}