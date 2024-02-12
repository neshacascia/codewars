//
//

function sortArray(array) {
  return array.sort(a => {
    if (a % 2 !== 0) {
      return a;
    }
  });
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));
