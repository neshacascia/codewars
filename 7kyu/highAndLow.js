function highAndLow(numbers) {
  const arr = numbers
    .split(' ')
    .filter(elem => elem !== ' ')
    .sort((a, b) => a - b);

  return `${arr[arr.length - 1]} ${arr[0]}`;
}

// Refactored solution:
function highAndLow(numbers) {
  const arr = numbers.split(' ');

  return `${Math.max(...arr)} ${Math.min(...arr)}`;
}
