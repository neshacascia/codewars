function countPositivesSumNegatives(input) {
  let newArr = [];
  let positive = 0;
  let negative = 0;

  if (input === null || input.length === 0) {
    return [];
  } else {
    input.forEach(num => {
      if (num > 0) {
        positive++;
      } else if (num < 0) {
        negative += num;
      }
    });
  }
  newArr.push(positive, negative);
  return newArr;
}

let testData = [];

console.log(countPositivesSumNegatives(testData));
