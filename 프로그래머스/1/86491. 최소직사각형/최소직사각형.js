function solution(sizes) {
  const businessCards = sizes.map((size) => {
    const businessCard = [...size];
    businessCard.sort((a, b) => b - a);
    
    return businessCard;
  })
  
  let maxWidth = 0;
  let maxHeight = 0;
  
  businessCards.forEach(([w, h]) => {
    maxWidth = Math.max(maxWidth, w);
    maxHeight = Math.max(maxHeight, h);
  })
  
  return maxWidth * maxHeight;
}