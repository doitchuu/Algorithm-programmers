function solution(players, m, k) {
    let addCount = 0;
    const serverList = [];
    
    for (let time = 0; time < players.length; time++) {
        const needs = Math.floor(players[time] / m);
        
        for (let i = serverList.length - 1; i >= 0; i--) {
            serverList[i][1]--; // 남은 시간 1시간 줄이기
 
            if (serverList[i][1] <= 0) {
                serverList.splice(i, 1);
            }
        }
        
        const servers = serverList.reduce((acc, cur) => acc + cur[0], 0);
        
        if (needs > servers) {
            const newCount = needs - servers;
            addCount += newCount;
            
            serverList.push([newCount, k]); // [서버 수, 남은 시간]
        }
    }

    return addCount;
}
