// Square(n) Sum
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

let sum = 0

function squareSum(numbers){
    numbers.forEach(num => {
        sum += Math.pow(num, 2)
    })
    return sum
}