function solution(nums) {
  const divide = nums.length / 2;
  const kinds = new Set(nums).size;
    
  return divide < kinds ? divide : kinds;
}