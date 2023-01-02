function recursiveFibonacci(num) {
  if (num === 0) return 0;
  if (num <= 2) return 1;

  return recursiveFibonacci(num - 1) + recursiveFibonacci(num - 2);
}


function fibonacciMemoziation(num) {
  const memo = [0, 1];
  const fibonacci = (num) => {
    if (memo[num] != null) return memo[num];
    return (memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo));
  };
  return fibonacci;
}
