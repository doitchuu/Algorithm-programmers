function solution(order) {
    const orderList = [...order.toString()].filter((item) => item === "3" || item === "6" || item === "9");
    return orderList.length;
}
