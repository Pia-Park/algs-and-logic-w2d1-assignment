// Write a fucntion that takes an array of integers (positive or negative or both) and return 
// the sum of the absolute value of each element.

const getAbsSum = function(arr){
    let sum = 0;
    for(let i in arr){
        sum += Math.abs(arr[i]);
    }
    return sum;
}

// const getAbsSum = function(arr) {
//     const reducer = (acculate, currentValue) => {
//         return acculate + currentValue;
//     };
//     return Math.abs(arr.reduce(reducer));
// }


// console.log(getAbsSum([2, -1, 4, 8, 10])); 
// ➞ 25

// console.log(getAbsSum([-3, -4, -10, -2, -3])); 
// ➞ 22

// console.log(getAbsSum([2, 4, 6, 8, 10])); 
// ➞ 30

// console.log(getAbsSum([-1])); 
//➞ 1