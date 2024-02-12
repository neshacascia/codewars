// Sum without highest and lowest number
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element
// (by value, not by index!).

// The highest or lowest element respectively is a single element at each edge, even if there are
// more than one with the same value.

function sumArray(array) {
  if (array) {
    const sortedArray = array.sort((a, b) => a - b);
    sortedArray.pop();
    sortedArray.shift();

    return sortedArray.reduce((accum, curr) => accum + curr, 0);
  } else {
    return 0;
  }
}

// Refactored solution:
function sumArray(array) {
  return array
    ? array
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((accum, curr) => accum + curr, 0)
    : 0;
}
