function solution(name, yearning, photo) {
    const result = new Array(photo.length).fill(0);
    const map = new Map();
    
    name.forEach((person, index) => {
        map.set(person, yearning[index]);
    })
    
    for (let i = 0; i < photo.length; i++) {
        for (let j = 0; j < photo[i].length; j++) {
            if (map.has(photo[i][j])) {
                result[i] += map.get(photo[i][j]);
            }
        }
    }
    
    return result;
}