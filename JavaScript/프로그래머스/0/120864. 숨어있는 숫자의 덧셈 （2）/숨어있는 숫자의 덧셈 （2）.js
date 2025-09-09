function solution(my_string) {
    let sum = 0;
    let number = "";
    for (let i = 0; i < my_string.length; i++) {
        if (!Number.isNaN(+my_string[i])) {
            if (!Number.isNaN(+my_string[i + 1])) {
                number += my_string[i];
                continue;
            }
            
            if (number !== "") {
                number += my_string[i];
                sum += Number(number);
                number = "";
                continue;
            }
            
            sum += Number(my_string[i]);
        }
    }
    
    return sum;
}