function solution(sides) {
    const triangle = sides.sort((a, b) => b - a);
    const isPossibleTriangle = triangle[0] < (triangle[1] + triangle[2]);
    
    return isPossibleTriangle ? 1 : 2;
}