function solution(n, slicer, num_list) {
    const [a, b, c] = slicer;
    let result = [];
    
    switch (n) {
        case 1:
            result = num_list.slice(0, b + 1);
            break;
        case 2:
            result = num_list.slice(a);
            break;
        case 3:
            result = num_list.slice(a, b + 1);
            break;
        case 4:
            for (let i = a; i <= b; i += c) {
                result.push(num_list[i]);
            };
            break;
    }
    
    return result;
}