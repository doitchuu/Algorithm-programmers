// 0 < x < 90 : 예각 1 
// x = 90 : 직각 2
// 90 < x < 180 : 둔각 3
// x = 180 : 평각 4

function solution(angle) {
    if (angle > 0 && angle < 90) {
        return 1;
    }
    
    if (angle === 90) {
        return 2;
    }
    
    if (angle > 90 && angle < 180) {
        return 3;
    }
    
    return 4;
}