function solution(s) {
    const strList = s.toLowerCase().split(" ");
    
    return strList.map((word) => word ? word[0].toUpperCase() + word.slice(1) : "").join(" ");
}
