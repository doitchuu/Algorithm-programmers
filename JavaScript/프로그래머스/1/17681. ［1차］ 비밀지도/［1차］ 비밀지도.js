function solution(n, arr1, arr2) {
const result = [];
    let answer = "";
    
    for (let i = 0; i < arr1.length; i++) {
        let binary_1 = arr1[i].toString(2);
        let binary_2 = arr2[i].toString(2);
        const length_1 = binary_1.length;
        const length_2 = binary_2.length;
        
        if (length_1 < n) {
            binary_1 = "0".repeat(n - length_1) + binary_1;
        }
        
        if (length_2 < n) {
            binary_2 = "0".repeat(n - length_2) + binary_2;
        }
        
        for (let j = 0; j < n; j++) {
            if (binary_1[j] === "0" && binary_2[j] === "0") {
                answer += " ";
                continue;
            }
            
            answer += "#";
        }
        
        result.push(answer);
        answer = "";
    }
    
     return result;
}