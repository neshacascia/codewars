// Stringy Strings
// write me a function stringy that takes a size and returns a string of alternating 1s and 0s.
// the string should start with a 1.

// a string with size 6 should return :'101010'.

function stringy(size) {
  let str = '';

  for (let i = 0; i < size; i++) {
    if (i % 2 === 0) {
      str += '1';
    } else {
      str += '0';
    }
  }

  return str;
}
