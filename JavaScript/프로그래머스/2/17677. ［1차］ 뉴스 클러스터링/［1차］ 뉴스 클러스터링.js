function solution(str1, str2) {
    // A B 교집합 / 합집합 = 자카드 유사도
    // 1. 문자 두 개를 대문자로 만든다. 이 후 문자들을 쪼개 배열을 각각 만든다.
    // 2. 각 배열을 교집합만 찾기 -> 합집합 찾아질둣.
    const char1Map = makeMultiset(str1);
    const char2Map = makeMultiset(str2);
    let intersection = 0;

    // 길이 긴 문자열 기준으로, 하나씩 같은 거 찾기 (중복 될 수 있으니 표기 필요)
    // 각 키 같은 거 있는 지 확인 -> 갯수 확인, 작은 수 더하기 
    for (const [key, value] of char1Map) {
        if (char2Map.has(key)) {
            intersection += Math.min(value, char2Map.get(key));
        }
    }
    
    const keys = new Set([...char1Map.keys(), ...char2Map.keys()]);    
    let union = 0;
    
    for (const key of keys) {
        union += (char1Map.get(key) ?? 0) + (char2Map.get(key) ?? 0);
    }
    
    union -= intersection;
    
 
    if (intersection === 0 && union === 0) {
        return 65536;
    }
    
    return Math.floor((intersection / union) * 65536);
}

function makeMultiset(str) {
    const char = str.toUpperCase();
    const map = new Map();
    
    for (let i = 0; i < char.length - 1; i++) {
        let word;
        
        if (char[i] >= "A" && char[i] <= "Z"
           && char[i + 1] >= "A" && char[i + 1] <= "Z") {
            word = char[i] + char[i + 1];
            
            if (map.has(word)) {
                map.set(word, map.get(word) + 1);
                continue;
            }
        
            map.set(word, 1);
        }
    }
    
    return map;
}