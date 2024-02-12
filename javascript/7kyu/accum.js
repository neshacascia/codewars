function accum(s) {
  const arr = s.split('');

  let str = '';

  arr.forEach((elem, ind) => (str += elem));
  return str;
}

console.log(accum('abcd'));
