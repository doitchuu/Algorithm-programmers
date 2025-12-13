function solution(arr1, arr2) {
    var answer = [];
    
    // arr1의 첫 행과 arr2의 열들(0, arr2.length - 1)을 곱해서 배열에 값을 구해서 넣는다.
    // arr1.length - 1까지 행렬을 곱해준다.
    // arr1[i][j] * arr2[j][i] + arr1[i][j] * arr
    for (let i = 0; i < arr1.length; i++) {
        const result = [];
        
        for (let j = 0; j < arr2[0].length; j++) {
            let sum = 0;
            
            for (let k = 0; k < arr1[0].length; k++) {
                sum += (arr1[i][k] * arr2[k][j]);
            }
            
            result.push(sum);
            sum = 0;
        }
        
        answer.push(result);
    }
    
    return answer;
}