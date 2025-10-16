function solution(my_string, queries) {
    for (let i = 0; i < queries.length; i++) {
        const [s, e] = queries[i];
        const string = my_string.slice(s, e + 1);
        const reversedStr = [...string].reverse().join("");
        
        my_string = my_string.slice(0, s) + reversedStr + my_string.slice(e + 1);
    }
    
    return my_string;
}