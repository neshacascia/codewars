// Is the string uppercase?
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any
// lowercase letter so any string containing no letters at all is trivially considered
// to be in ALL CAPS.

String.prototype.isUpperCase = function () {
  return this.valueOf() === this.toUpperCase();
};
