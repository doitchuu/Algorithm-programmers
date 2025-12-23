function solution(n, wires) {
    const graph = Array.from({ length: n + 1 }, () => []);
    
    for (const [a, b] of wires) {
        graph[a].push(b);
        graph[b].push(a);
    }

    let answer = Infinity;

    function dfs(node, visited, blockedA, blockedB) {
        visited[node] = true;
        let count = 1;

        for (const next of graph[node]) {
            // 끊은 간선은 무시
            if (
                (node === blockedA && next === blockedB) ||
                (node === blockedB && next === blockedA)
            ) continue;

            if (!visited[next]) {
                count += dfs(next, visited, blockedA, blockedB);
            }
        }
        return count;
    }

    for (const [a, b] of wires) {
        const visited = Array(n + 1).fill(false);
        const cnt = dfs(a, visited, a, b);
        const diff = Math.abs(n - cnt * 2);
        answer = Math.min(answer, diff);
    }

    return answer;
}