function sumPrimes(num) {
  let sum = 0;
  for (let i = 2; i <= num; i += 1) {
    let prime = true;
    for (let j = 2; j < i; j += 1) {
      if (i % j === 0) {
        prime = false;
        break;
      }
    }
    if (prime) {
      sum += i;
    }
  }
  return sum;
}

export { sumPrimes };
