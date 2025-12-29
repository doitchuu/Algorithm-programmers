function solution(board) {
    const set = new Set();
    let allBox = board.length * board.length;
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] !== 1) {
                continue;
            }
            
            markUnsafe(i, j, board[0].length, set);
        }
    }
    
    return allBox - set.size;
}

function markUnsafe(x, y, n, set) {
    const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
    const dy = [-1, 0, 1, -1, 1, -1, 0, 1];

    set.add(`${x},${y}`);

    for (let k = 0; k < 8; k++) {
        const newX = x + dx[k];
        const newY = y + dy[k];

        if (newX >= 0 && newX < n && newY >= 0 && newY < n) {
            set.add(`${newX},${newY}`);
        }
    }
}