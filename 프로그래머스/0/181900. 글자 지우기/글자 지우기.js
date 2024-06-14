function solution(my_string, indices) {
  indices.sort((a, b) => b - a);
  
  indices.forEach((index) => {
    my_string = my_string.substring(0, index) + my_string.substring(index + 1);
  });

  return my_string;
}