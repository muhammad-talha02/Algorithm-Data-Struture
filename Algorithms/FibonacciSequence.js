//? What is Finonacci Sequence?
//* In mathematics, Fibonacci is a squenece in which each number is the sum of two preceding (previous) numbers. First two numbers in sequence is 0 and 1.

//? Problem Statement
//* Give a number 'n', and find first 'n' elements of Fibonacci Sequence.

//TODO

function fibonacci(n) {
  const fib = [0, 1];
  for (let index = 2; index < n; index++) {
    fib[index] = fib[index - 1] + fib[index - 2];
  }
  return fib;
}

console.log(fibonacci(5));

//! Big-O = O(n)        it Depends on Input Size
