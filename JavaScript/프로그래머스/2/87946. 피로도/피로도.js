function solution(k, dungeons) {
    const map = new Array(dungeons.length).fill(false);
    let result = 0;
    
    function dfs (health, depth) {
        result = Math.max(depth, result);
        
        for (let i = 0; i < dungeons.length; i++) {
            const [needs, hp] = dungeons[i];
            
            if (map[i] || needs > health) {
                continue;
            }
        
            map[i] = true;
            
            dfs(health - hp, depth + 1);
            
            map[i] = false;
        }
        
    }
    
    dfs(k, 0);
    
    return result;
}
