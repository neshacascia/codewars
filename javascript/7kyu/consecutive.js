function consecutive(arr) {
  const max = Math.max(...arr);
  const newArr = [];

  for (let i = 1; i <= max; i++) {
    console.log(i, arr[i]);
    if (i !== arr[i]) {
      arr.push();
    }
  }
  return newArr;
}

console.log(consecutive([4, 8, 6]));
