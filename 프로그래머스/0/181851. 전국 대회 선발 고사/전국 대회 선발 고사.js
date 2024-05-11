function solution(rank, attendance) {
  const ranks = [...rank];
  
  const students = ranks.map((rank, index) => {
    if (attendance[index]) {
     return { student: index, rank: rank};
    }
  }).sort((a, b) => a.rank - b.rank);
  
  return 10000 * students[0].student + 100 * students[1].student + students[2].student;
}
