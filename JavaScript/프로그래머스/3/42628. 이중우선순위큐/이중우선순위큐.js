function solution(operations) {
    const queue = [];
    
    for (let i = 0; i < operations.length; i++) {
        switch (operations[i]) {
            case "D -1":
                queue.shift();
                break;
            case "D 1":
                queue.pop();
                break;
            default:
                queue.push(Number(operations[i].split(" ")[1]));
                break;
        }
        
        queue.sort((a, b) => a - b);
    }
    
    return queue.length ? [queue[queue.length - 1], queue[0]] : [0, 0];
}