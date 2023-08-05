// What's the real floor?
// Write a function that given a floor in the american system returns the floor in the european system.
// With the 1st floor being replaced by the ground floor and the 13th floor being removed,
// the numbers move down to take their place. In case of above 13, they move down by two
// because there are two omitted numbers below them.

// Basements (negatives) stay the same as the universal level.

function getRealFloor(n) {
  if (n === 0) {
    return 0;
  } else if (n < 0) {
    return n;
  } else if (n > 13) {
    return n - 2;
  } else {
    return n - 1;
  }
}

// Refactored solution:
function getRealFloor(n) {
  return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
}
