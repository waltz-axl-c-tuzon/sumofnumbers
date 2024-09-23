"use strict";
const sumFor = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i += 1) {
        sum += arr[i];
    }
    return sum;
};
console.log(sumFor([1, 2, 3, 4]));
const sumWhile = (arr) => {
    let sum = 0;
    let counter = arr.length - 1;
    while (counter >= 0) {
        sum += arr[counter];
        counter -= 1;
    }
    return sum;
};
console.log(sumWhile([1, 2, 3, 4]));
const sumRecursion = (arr) => {
    if (arr.length === 0) {
        return 0;
    }
    return Number(arr.pop()) + sumRecursion(arr);
};
console.log(sumRecursion([1, 2, 3, 4]));
const sumTheFunctionalWay = (arr) => {
    let sum = 0;
    arr.forEach((val) => sum += val);
    return sum;
};
console.log(sumTheFunctionalWay([1, 2, 3, 4]));
