function solution(myStr) {
    const replaced = myStr.replace(/[abc]/g, " ");
    const result = replaced.split(" ").filter(str => str !== "");
    
    return result.length > 0 ? result : ["EMPTY"];
}