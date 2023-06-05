// Is n divisible by (...)?
// Create a function that checks if the first argument n is divisible by all
// other arguments (return true if no other arguments)

function isDivisible(...nums) {
  const n = nums.shift();

  return nums.every(num => n % num === 0);
}
