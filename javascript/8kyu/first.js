// Pick a set of first elements:
// Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1)
// will return the first n element(s) of the sequence.

// If n == 0 return an empty sequence []

function first(arr, n = 1) {
  return n === 0 ? [] : arr.slice(0, n);
}
