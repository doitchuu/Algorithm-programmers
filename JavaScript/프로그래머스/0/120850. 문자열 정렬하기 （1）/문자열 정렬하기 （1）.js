function solution(my_string) {
    const numberList = [...my_string].map(Number).filter((num) => !Number.isNaN(num));
    return numberList.sort((a, b) => a - b);
}