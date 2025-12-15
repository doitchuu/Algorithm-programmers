function solution(clothes) {
    const itemList = {};
    
    for (let i = 0; i < clothes.length; i++) {
        const length = clothes[i].length;
        const category = clothes[i][length - 1];
        const count = clothes[i].length - 1;
        
        if (!itemList[category]) {
            itemList[category] = count;
            continue;
        }
        
        itemList[category] += count;
    }
    
    let combination = 1;
    
    for (const category in itemList) {
        combination *= (itemList[category] + 1);
    }
    
    return combination - 1;
}
