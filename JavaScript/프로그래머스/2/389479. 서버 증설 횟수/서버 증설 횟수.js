function solution(players, m, k) {
    // m명마다 서버 1대, k시간동안 유지
    // 서버가 있는지 확인, 있으면 몇대가 남았는지 확인한다.
    // 이용자 수를 확인하고, 수가 m명 이상 (n + 1) x m 미만이면 해당 서버개설
    // 추가한 서버 증설 횟수를 더한다.
    // 다음 시간으로 넘어갈 때, 서버 시간을 줄인다.
    // 마지막 시간까지 확인하고 서버 증설 횟수를 반환한다.
    let addCount = 0;
    const serverList = [];
    
    for (let time = 0; time < players.length; time++) {
        const needs = Math.floor(players[time] / m); // 필요한 갯수 : [서버 수, 남은 시간]
        
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
            
            serverList.push([newCount, k]);
        }
    }

    return addCount;
}