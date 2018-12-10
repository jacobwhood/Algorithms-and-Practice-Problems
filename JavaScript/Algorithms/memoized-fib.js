/**
 * Memoized Fibonacci solution
 * - Common example of dynamic programming
 * - Can be thought of as top-down approach
 */

function fibonacci(n, memo = [undefined, 1, 1]) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  
  let result = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  
  memo[n] = result;

  return result;
}

console.log(fibonacci(5));     // 5
console.log(fibonacci(10));    // 55
console.log(fibonacci(24));    // 46368
console.log(fibonacci(100));   // 354224848179262000000
console.log(fibonacci(200));   // 2.8057117299251016e+41
