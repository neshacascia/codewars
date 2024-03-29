// The highest profit wins!
// Ben has a very simple idea to make some profit: he buys something and sells
// it again. Of course, this wouldn't give him any profit at all if he was simply
// to buy and sell it at the same price. Instead, he's going to buy it for the lowest
// possible price and sell it at the highest.

// Write a function that returns both the minimum and maximum number of the given list/array.

function minMax(arr) {
  arr.sort((a, b) => a - b);
  return [arr[0], arr[arr.length - 1]];
}

// Refactored solution:
function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}
