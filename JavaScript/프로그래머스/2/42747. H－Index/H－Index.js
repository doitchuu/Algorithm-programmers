function solution(citations) {
    for (let index = 1; index <= citations.length; index++) {
        let count = 0;
        
        citations.forEach((citation) => {
            if (citation >= index) {
                count++;
            }
        })
        
        if (count < index) {
            return index - 1;
        }
    }
    
    return citations.length;
} 