function solution(date1, date2) {
    const [year1, month1, days1] = date1;
    const [year2, month2, days2] = date2;
    const newDate1 = new Date(year1, month1, days1);
    const newDate2 = new Date(year2, month2, days2);
    
    return newDate1 < newDate2 ? 1 : 0;
}