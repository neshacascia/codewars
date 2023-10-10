// Count the divisors of a number
// Count the number of divisors of a positive integer n. Random tests go up to n = 500000.
// Note you should only return a number, the count of divisors.
// The numbers between parentheses are shown only for you to see which numbers are counted in each case.

function getDivisorsCnt(n) {
  let count = 0;

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      count++;
      if (i !== n / i) {
        count++;
      }
    }
  }
  return count;
}
