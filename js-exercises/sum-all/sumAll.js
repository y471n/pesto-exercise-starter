function sumAll(arr) {
  let lowerNumber = Math.min(arr[0], arr[1]);
  const higherNumber = lowerNumber === arr[0] ? arr[1] : arr[0];
  let sum = 0;
  while (lowerNumber <= higherNumber) {
    sum += lowerNumber;
    lowerNumber += 1;
  }
  return sum;
}

export { sumAll };
