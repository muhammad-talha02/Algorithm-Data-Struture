//? What is Factorial?
//* Factorial of a non-negative integar 'n', it is the product of all numbers from 1 to 'n' or less than, equAL TO 'N'.

//? Problem
//* Give an integar 'n'. Find the Factorial of integar 'n'.

//TODO

function factorial(n) {
    let result = 1;
    for (let i = n; i >= 1; i--) {
      result *= i;
    }
    return result;
  }
  console.log(factorial(1));


  //! Big-O = O(n)  --- Linear Complexity