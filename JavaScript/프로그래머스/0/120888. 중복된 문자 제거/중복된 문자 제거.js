function solution(my_string) {
    const result = new Set([...my_string]);
    return [...result].join("");
}