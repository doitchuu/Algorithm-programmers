function solution(nums) {
    const average = nums.length / 2;
    const set = new Set(nums);
    const kind = set.size;
    
    return kind > average ? average : kind;
}
