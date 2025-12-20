function solution(k, dungeons) {
    const isUsed = new Array(dungeons.length).fill(false);
    let result = 0;
    
    function dfs(hp, depth) {
        if (dungeons.length === depth) {
            return;
        }
    
        for (let start = 0; start < dungeons.length; start++) {
            const [need, fatigue] = dungeons[start];
            
            if (isUsed[start]) {
                continue;
            }
            
            if (hp < need || fatigue > hp || hp <= 0) {
                continue;
            }
            
            isUsed[start] = true;
            result = Math.max(result, depth + 1);
            
            dfs(hp - fatigue, depth + 1);
            
            isUsed[start] = false;
        }
    }
    
    dfs(k, 0);
    
    return result;
}