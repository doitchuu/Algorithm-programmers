function solution(s) {
    // 1. s + s 두 배로 만든다. > 마지막 괄호까지 검사한다.
    // 2. 첫 시작점 부터 [, (, { 이면 스택에 넣는다. 
    // 3. 스택에 있는 괄호를 비교해서 맞는 닫는 괄호면 스택에서 제거 / 끝날 때까지 스택이 안비워져있으면 result x / 스택이 비워져있으면 0
    const strList = [...s + s];
    let result = 0;
    
    for (let start = 0; start < strList.length / 2; start++) {
        const stack = [];
        let isValid = true;
        
        for (let i = start; i < start + s.length; i++) {
            const char = strList[i];
            
            if (char === "[" || char === "(" || char === "{") {
                stack.push(char);
            } else {
                if (!stack.length) {
                    isValid = false;
                    break;
                }
                
                if (
                        (char === "]" && stack[stack.length - 1] === "[") ||
                        (char === ")" && stack[stack.length - 1] === "(") ||
                        (char === "}" && stack[stack.length - 1] === "{")
                    ) {
                        stack.pop();
                } else {
                    isValid = false;
                    break;
                }
            }
        }
        
        if (isValid && stack.length === 0) {
            result++;
        }
    }
    
    return result;
}