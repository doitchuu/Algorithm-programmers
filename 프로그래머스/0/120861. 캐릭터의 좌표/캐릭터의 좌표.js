function solution(keyinput, board) {
    let position = [0, 0]; 

    const maxX = Math.floor(board[0] / 2); 
    const maxY = Math.floor(board[1] / 2);  

    for (let key of keyinput) {
        let newPosition = [...position];

        if (key === "up") {
            newPosition[1] += 1; 
        } else if (key === "down") {
            newPosition[1] -= 1; 
        } else if (key === "left") {
            newPosition[0] -= 1; 
        } else if (key === "right") {
            newPosition[0] += 1;  
        }

        if (Math.abs(newPosition[0]) <= maxX && Math.abs(newPosition[1]) <= maxY) {
            position = newPosition; 
        }
    }

    return position; 
}