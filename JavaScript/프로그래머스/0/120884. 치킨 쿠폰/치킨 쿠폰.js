function solution(chicken) {
  let coupon = chicken; 
  let service = 0;      

  while (coupon >= 10) {
    const newChicken = Math.floor(coupon / 10);
    service += newChicken;
    coupon = newChicken + (coupon % 10); 
  }

  return service;
}