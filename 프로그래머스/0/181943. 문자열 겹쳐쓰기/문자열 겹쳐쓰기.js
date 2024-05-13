function solution(my_string, overwrite_string, s) {
  const overwrite_string_length = overwrite_string.length;
  const overwrittedString = my_string.slice(0, s) + overwrite_string + my_string.slice(overwrite_string_length + s, my_string.length);
  
  return overwrittedString;
}