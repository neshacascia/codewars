/* Beginner - Reduce but Grow:
Given a non-empty array of integers, return the result of multiplying the values together in order.  */

function grow(x) {
  return x.reduce((num1, num2) => num1 * num2);
}
