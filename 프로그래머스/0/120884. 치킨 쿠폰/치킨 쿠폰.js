function solution(chicken) {
  let coupon = chicken;
  let result = 0;
  
  while (coupon >= 10) {
    const serviceChikens = Math.floor(coupon / 10);
    
    result += serviceChikens;
    coupon = coupon - (serviceChikens * 10) + serviceChikens;
  }
  
  return result;
}
