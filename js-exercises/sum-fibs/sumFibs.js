function sumFibs(limit) {
  if (limit <= 1) {
    return 1;
  }
  let fib1 = 1;
  let fib2 = 1;
  let sum = fib1;
  while (fib2 <= limit) {
    if (fib2 % 2 !== 0) {
      sum += fib2;
    }
    const temp = fib1 + fib2;
    fib1 = fib2;
    fib2 = temp;
  }
  return sum;
}

export { sumFibs };
