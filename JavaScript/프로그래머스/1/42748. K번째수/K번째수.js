function solution(array, commands) {
    const result = [];
    
    return commands.map((command) => {
        const [i, j, k] = command;
        const sortedArray = array.slice(i - 1, j).sort((a, b) => a - b);

        return sortedArray[k - 1];
    })
}