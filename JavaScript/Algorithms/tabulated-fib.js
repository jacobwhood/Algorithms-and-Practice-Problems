/**
 * Tabulated Fibonacci solution
 * - Common example of dynamic programming
 * - Can be thought of as bottoms-up approach
 */

function fibonacci(n) {
  if (n <= 2) return 1;
  
  let fibNumbers = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    fibNumbers[i] = fibNumbers[i = 1] + fibNumbers[i - 2];
  }

  return fibNumbers[n];
}

console.log(fibonacci(5));     // 5
console.log(fibonacci(10));    // 55
console.log(fibonacci(24));    // 46368
console.log(fibonacci(100));   // 354224848179262000000
console.log(fibonacci(200));   // 2.8057117299251016e+41
