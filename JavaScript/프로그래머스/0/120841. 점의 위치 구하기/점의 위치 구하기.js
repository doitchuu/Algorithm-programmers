function solution(dot) {
    const [x, y] = dot;
    const quadrant_1 = x > 0 && y > 0;
    const quadrant_2 = x < 0 && y > 0;
    const quadrant_3 = x < 0 && y < 0;
    
    if (quadrant_1) {
        return 1;
    } else if (quadrant_2) {
        return 2;
    } else if (quadrant_3) {
        return 3;
    } else {
        return 4;
    }
}