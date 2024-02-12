// Square Every Digit:
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Note: The function accepts an integer and returns an integer.

function squareDigits(num) {
  let arr = num.toString().split('');

  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += Math.pow(Number(arr[i]), 2);
  }

  return Number(str);
}

// Refactored solution:
function squareDigits(num) {
  return num
    .toString()
    .split('')
    .map(x => x * x)
    .join('');
}
