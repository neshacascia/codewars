// Vowel Count
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  return str.split('').filter(elem => vowels.includes(elem)).length;
}

// Refactored solution
function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
