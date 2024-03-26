//? What is Power of Two?
//* An Integar is a Power of Two, if there exists an integar 'x' such that 'n' === 2^x

//? Problem:
//* Given an Integar 'n', determine is power of two or not.

//TODO

//? Using Loop
function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  const power = 2;
  let value = n;

  while (n < 1) {
    if (n % power !== 0) {
      return false;
    }
    n = n / power;
  }
  return true;
}
//! Big-O = O(logn) --- input size reduced by half

//? Using & Operator Bit Wise
function isPowerOfTwoBitWise(n) {
  if (n < 1) {
    return false;
  }

  return (n & (n - 1)) === 0;
}

//! Big-O = O(1) --- Constant

console.log(isPowerOfTwoBitWise(8));
