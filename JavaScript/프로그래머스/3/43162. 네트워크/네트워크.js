function solution(n, computers) {
    const visited = new Array(n).fill(false);
    let network = 0;
    
    for (let i = 0; i < n; i++) {
        if (visited[i]) {
            continue;
        }
        
        network++;
        const stack = [i];
        visited[i] = true;
        
        while (stack.length) {
            const cur = stack.pop();

            for (let next = 0; next < n; next++) {
                if (computers[cur][next] === 1 && !visited[next]) {
                    visited[next] = true;
                    stack.push(next);
                }
            }
        }
    }
    
    return network;
}