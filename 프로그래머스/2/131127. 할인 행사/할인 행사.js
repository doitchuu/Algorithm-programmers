function solution(want, number, discount) {
  const wishCart = {};
  let dayCount = 0;
  
  for (let i = 0; i < want.length; i++) {
    wishCart[want[i]] = number[i];
  }
  
  for (let j = 0; j <= discount.length - 10; j++) {
    const currentCart = {};
    
    for (let k = j; k < j + 10; k++) {
      if (!currentCart[discount[k]]) {
        currentCart[discount[k]] = 0;
      }
      
      currentCart[discount[k]] += 1;
    }
    
    let isMatch = true;
    
    for (const key in wishCart) {
      if (wishCart[key] !== currentCart[key]) {
        isMatch = false;
        
        break;
      }
    }
    
    if (isMatch) {
      dayCount++;
    }
  }
  
  return dayCount;
}
