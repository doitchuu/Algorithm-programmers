function solution(spell, dic) {
    const emptyStr = " ".repeat(spell.length);
    
    return dic.map((word) => {
        spell.forEach((alpha) => {
            if (word.includes(alpha)) {
                word = word.replace(alpha, " ");
            }
        })
        
        return word;
    }).includes(emptyStr) ? 1 : 2;
}
