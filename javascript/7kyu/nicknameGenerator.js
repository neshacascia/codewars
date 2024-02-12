// Nickname Generator
// Write a function, nicknameGenerator that takes a string name as an argument and
// returns the first 3 or 4 letters as a nickname.

// If the 3rd letter is a consonant, return the first 3 letters.
// If the 3rd letter is a vowel, return the first 4 letters.
// If the string is less than 4 characters, return "Error: Name too short".

function nicknameGenerator(name) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  if (name.length < 4) {
    return 'Error: Name too short';
  } else if (vowels.includes(name[2])) {
    return name.slice(0, 4);
  } else {
    return name.slice(0, 3);
  }
}
