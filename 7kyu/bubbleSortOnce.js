// Bubblesort Once
// Given an array of integers, your function should return a new array equivalent to performing
// exactly 1 complete pass on the original array. Your function should be pure,
// i.e. it should not mutate the input array.

function bubblesortOnce(a) {
  const newArr = [...a];

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] > newArr[i + 1]) {
      const temp = newArr[i];
      newArr[i] = newArr[i + 1];
      newArr[i + 1] = temp;
    }
  }
  return newArr;
}
