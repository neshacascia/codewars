/* Invert values:
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives. */

function invert(array) {
  if (array.length === 0) {
    return [];
  } else {
    return array.map(num => {
      if (num >= 0) {
        return -num;
      } else if (num < 0) {
        return Math.abs(num);
      }
    });
  }
}
