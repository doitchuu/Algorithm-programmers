function solution(food) {
  let dividedFood = 0;
  let foodFightList = "0";
  
  for (let i = 0; i < food.length; i++) {
    let middleOfIndex = Math.floor(foodFightList.length / 2);
    
    if (food[i] >= 2) {
      dividedFood = Math.floor(food[i] / 2);
      foodFightList = foodFightList.substring(0, middleOfIndex) + `${i}`.repeat(dividedFood)  + "0" + `${i}`.repeat(dividedFood) + foodFightList.substring(middleOfIndex + 1);
    }
  }
  
  return foodFightList;
}