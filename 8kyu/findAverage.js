/* Calculate average:
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0. */

function findAverage(array) {
  if (array.length > 0) {
    return (
      array.reduce((num1, num2) => {
        return num1 + num2;
      }) / array.length
    );
  }
  return 0;
}

console.log(findAverage([1, 2, 3]));
