function solution(array) {
    const newArray = [...array].sort((a, b) => b - a);
    const index = array.indexOf(newArray[0]);

    return [newArray[0], index];
}