function solution(participant, completion) {
    const map = new Map();
    
    for (const person of completion) {
        map.set(person, (map.get(person) ?? 0) + 1);
    }
    
    for (const person of participant) {
        if (map.get(person)) {
            map.set(person, map.get(person) - 1);
        } else {
            return person;
        }
    }
}