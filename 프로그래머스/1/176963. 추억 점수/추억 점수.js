function solution(name, yearning, photo) {
  let result = [];
  const personYearning = {};

  for (let i = 0; i < name.length; i++) {
    personYearning[name[i]] = yearning[i];
  }

  for (let i = 0; i < photo.length; i++) {
    let photoList = [];

    for (let j = 0; j < photo[i].length; j++) {
      photoList.push(photo[i][j]);
    }

    let photoYearningSum = 0;

    for (let k = 0; k < photoList.length; k++) {
      if (personYearning[photoList[k]]) {
        photoYearningSum += personYearning[photoList[k]];
      }
    }

    result.push(photoYearningSum);
  }

  return result;
}
