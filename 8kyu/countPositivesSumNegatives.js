function countPositivesSumNegatives(input) {
  let newArr = [];
  let positive = 0;
  let negative = 0;

  if (input === []) {
    return [];
  } else {
    input.forEach(num => {
      if (num > 0) {
        positive++;
      } else if (num < 0) {
        negative += num;
      } else {
        return [];
      }
    });
    newArr.push(positive, negative);
  }
  return newArr;
}

let testData = [];

console.log(countPositivesSumNegatives(testData));
