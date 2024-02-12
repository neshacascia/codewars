// Find the capitals
// Write a function that takes a single string (word) as argument. The function must return
// an ordered list containing the indexes of all capital letters in the string.

// Example
// "CodEWaRs" --> [0,3,4,6]

var capitals = function (word) {
  const newArr = [];

  word.split('').map((elem, ind) => {
    if (elem === elem.toUpperCase()) {
      newArr.push(ind);
    }
  });

  return newArr;
};
