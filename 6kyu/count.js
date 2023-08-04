// Count characters in your string
// The main idea is to count all the occurring characters in a string.
// If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.
function count(string) {
  const arr = string.split('');

  let obj = {};

  arr.forEach(elem => {
    if (obj.hasOwnProperty(elem)) {
      obj[elem] = obj[elem] + 1;
    } else {
      obj[elem] = 1;
    }
  });

  return obj;
}

// Refactored solution:
function count(string) {
  let obj = {};

  string.split('').forEach(elem => (obj[elem] ? obj[elem]++ : (obj[elem] = 1)));

  return obj;
}
